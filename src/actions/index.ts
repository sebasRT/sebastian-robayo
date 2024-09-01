import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    getVisitorMessage: defineAction({
        accept: "form",
        input: z.object({
            Name: z.string().optional(),
            Email: z.string().optional(),
            Message: z.string(),
        }),
        handler: async (input) => {

            const sendVisitorsInfoToMyMail = await fetch("https://getform.io/f/akkgvrla",
                {
                    method: "POST",
                    body: JSON.stringify(input),
                    headers: {
                        "accept": "application/json",
                        "Content-Type": "application/json"
                    }
                }
            );

            if (!sendVisitorsInfoToMyMail.ok) {
                return { data: "Failed to send message! 😞" , ok: sendVisitorsInfoToMyMail.ok }
            }
            return { data: "Message sent successfully! 🚀", ok: sendVisitorsInfoToMyMail.ok }
        }
    })
}