import { contacts } from "@/app/data/data";

export async function GET() {
    return Response.json(contacts);
}

export async function POST(request: Request) {
    const contact = await request.json();
    delete contact.validate;
    const newContact = {
        id: contacts.length + 1,
        details: contact,
    };
    contacts.push(newContact);
    return new Response(JSON.stringify(newContact), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}