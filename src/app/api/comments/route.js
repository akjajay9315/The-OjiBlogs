// import { getAuthSession } from "@/utils/auth";
// import prisma from "@/utils/connect";
// import { NextResponse } from "next/server";

// // Handle both GET and POST requests
// export const handler = async (req) => {
//   if (req.method === "GET") {
//     // GET ALL COMMENTS OF A POST
//     const { searchParams } = new URL(req.url);
//     const postSlug = searchParams.get("postSlug");

//     try {
//       const comments = await prisma.comment.findMany({
//         where: {
//           postSlug: postSlug,
//         },
//         include: { user: true },
//       });

//       return new NextResponse(JSON.stringify(comments), { status: 200 });
//     } catch (err) {
//       console.log(err);
//       return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//       );
//     }
//   } else if (req.method === "POST") {
//     // CREATE A COMMENT
//     const session = await getAuthSession();

//     if (!session) {
//       return new NextResponse(
//         JSON.stringify({ message: "Not Authenticated!" }),
//         { status: 401 }
//       );
//     }

//     try {
//       const body = await req.json();
//       const comment = await prisma.comment.create({
//         data: { ...body, userEmail: session.user.email },
//       });

//       return new NextResponse(JSON.stringify(comment), { status: 200 });
//     } catch (err) {
//       console.log(err);
//       return new NextResponse(
//         JSON.stringify({ message: "Something went wrong!" }),
//         { status: 500 }
//       );
//     }
//   } else {
//     return new NextResponse(
//       JSON.stringify({ message: "Method not allowed" }),
//       { status: 405 }
//     );
//   }
// };

import { getAuthSession } from "@/utils/auth";
import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

// Handle both GET and POST requests
export const handler = async (req) => {
  if (req.method === "GET") {
    // GET ALL COMMENTS OF A POST
    const { searchParams } = new URL(req.url);
    const postSlug = searchParams.get("postSlug");

    try {
      const comments = await prisma.comment.findMany({
        where: {
          postSlug: postSlug,
        },
        include: { user: true },
      });

      return new NextResponse(JSON.stringify(comments), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else if (req.method === "POST") {
    // CREATE A COMMENT
    const session = await getAuthSession();

    if (!session) {
      return new NextResponse(
        JSON.stringify({ message: "Not Authenticated!" }),
        { status: 401 }
      );
    }

    try {
      const body = await req.json();
      const comment = await prisma.comment.create({
        data: { ...body, userEmail: session.user.email },
      });

      return new NextResponse(JSON.stringify(comment), { status: 200 });
    } catch (err) {
      console.error(err);
      return new NextResponse(
        JSON.stringify({ message: "Something went wrong!" }),
        { status: 500 }
      );
    }
  } else {
    return new NextResponse(JSON.stringify({ message: "Method not allowed" }), {
      status: 405,
    });
  }
};
