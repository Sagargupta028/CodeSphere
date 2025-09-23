import { Contact } from "../models/Contact.model.js";
import mailSender from "../utils/mailSender.js";
import contactMailTemplate from "../utils/contactMailTemplate.js";

export const contactUs = async (req, res) => {
    try {
        const { firstname, lastname, email, phone, message } = req.body;
        
        // Validate required fields
        if (!firstname || !lastname || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Create new contact entry in database
        const newContact = await Contact.create({
            firstName: firstname,
            lastName: lastname,
            email: email,
            phone: phone,
            message: message
        });

        // Send email notification to admin
        try {
            const adminEmail = process.env.ADMIN_EMAIL;
            if (adminEmail && process.env.MAIL_USER && process.env.MAIL_PASS) {
                const emailTemplate = contactMailTemplate({
                    firstName: firstname,
                    lastName: lastname,
                    email: email,
                    phone: phone,
                    message: message
                });

                await mailSender(
                    adminEmail,
                    `New Contact Message from ${firstname} ${lastname} - CodeSphere`,
                    emailTemplate
                );
                console.log("Admin notification email sent successfully");
            }
        } catch (emailError) {
            console.log("Error sending admin notification email:", emailError);
            // Don't fail the request if email fails
        }

        return res.status(200).json({
            success: true,
            message: "Contact message sent successfully",
            data: {
                id: newContact._id,
                firstName: newContact.firstName,
                lastName: newContact.lastName,
                email: newContact.email
            }
        });
        
    } catch (error) {
        console.log("Error in contact us", error);

        return res.status(500).json({
            success: false,
            message: "Error in sending contact message"
        })
    }
}

export const getAllContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        
        return res.status(200).json({
            success: true,
            message: "Contacts retrieved successfully",
            data: contacts
        });
        
    } catch (error) {
        console.log("Error in getting contacts", error);

        return res.status(500).json({
            success: false,
            message: "Error in retrieving contacts"
        })
    }
}