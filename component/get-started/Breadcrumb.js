// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";

// export default function Breadcrumb() {
//   const pathname = usePathname(); 
//   const paths = pathname.split("/").filter(Boolean);

//  console.log(paths[paths.length-1])

//   return (
//     <nav aria-label="breadcrumb" className="mb-4 container">
//       <ol className="flex space-x-2 items-center">
//         {paths.map((segment, index) => {
//           const href = "/" + paths.slice(0, index + 1).join("/");
//           const isLast = index === paths.length - 1;
//           // Optional: format the segment nicely
//           const name = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

//           console.log(segment)

        

//           return (
//             <li key={index} className="flex gap-2 items-center">
//               {!isLast ? (
//                 <>
//                   <Link href={href} className={`${paths[paths.length-1] == segment ? "text-main-blue" : ""}`}>{name}</Link>
//                   <span> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6"/></svg> </span>
//                 </>
//               ) : (
//                 <span>{name}</span>
//               )}
//             </li>
//           );
//         })}
//       </ol>
//     </nav>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Breadcrumb() {
  const pathname = usePathname();
  const paths = pathname.split("/").filter(Boolean);

  // Don’t show breadcrumb if it’s only "get-started"
  if ((paths.length === 1 && paths[0] === "get-started") || paths[1] === "customer-info") return null;

  const lastSegment = paths[paths.length - 1];

  return (
    <nav aria-label="breadcrumb" className="mb-4 container">
      <ol className="flex space-x-2 items-center">
        {paths.map((segment, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;

          // Format nicely
          const name = segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={index} className="flex gap-2 items-center">
              {!isLast ? (
                <>
                  <Link
                    href={href}
                    className={`${segment === lastSegment ? "text-main-blue" : ""} hover:text-main-blue duration-200`}
                  >
                    {name}
                  </Link>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-chevron-right-icon"
                    >
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </span>
                </>
              ) : (
                <span className="text-main-blue">{name}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
