import { reservations } from "@/app/data/data";

export async function GET() {
    return Response.json(reservations);
}

export async function POST(request: Request) {
    const reservation = await request.json();
    delete reservation.validate;
    const newReservation = {
        id: reservations.length + 1,
        details: reservation,
    };
    reservations.push(newReservation);
    return new Response(JSON.stringify(newReservation), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}