// import React from "react";
// import CircleDesign from "./CircleDesign";
// import { FaUniversity } from "react-icons/fa";
// import { PiStudentThin, PiUserThin } from "react-icons/pi";
// import { PiStudent } from "react-icons/pi";
// import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

// const RegisterLayout = () => {
//   const location = useLocation().pathname;

//   return (
//     <main
//       id="register"
//       className="relative z-0 flex h-screen items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 py-8 text-slate-900 dark:from-slate-800 dark:to-slate-950 dark:text-slate-200"
//     >
//       <CircleDesign />
//       <section className="my-8 flex h-fit w-fit animate-fadeInFast flex-col justify-start gap-6 rounded-md bg-slate-100 p-4 text-slate-900 opacity-70 hover:opacity-100 focus:opacity-100 dark:bg-[#060913] dark:text-slate-50 md:p-8 lg:flex-row xl:w-1/2 ">
//         <div className="flex flex-col-reverse justify-between lg:flex-col ">
//           <h1 className="text-4xl font-semibold lg:text-5xl">
//             {location === "/register/reg_teacher" ? "Teacher" : "Student"}
//             <br />
//             Registration
//           </h1>
//           <div className="m-2 flex flex-col-reverse gap-4 text-4xl md:text-5xl  lg:flex-col ">
//             <div className="flex gap-4 ">
//               <NavLink to={"./reg_teacher"}>
//                 <PiUserThin className="rounded-full border-[1px] border-slate-900 p-[2px] font-light dark:border-slate-300 md:p-2" />
//               </NavLink>
//               <NavLink to={"./reg_student"}>
//                 <PiStudentThin className="rounded-full border-[1px] border-slate-900 p-[2px] font-light dark:border-slate-300 md:p-2" />
//               </NavLink>
//             </div>
//             <Link
//               className="flex items-center font-spectral text-xl font-semibold text-slate-900 dark:text-slate-50"
//               to="../"
//             >
//              <PiStudent   />
//               <p className="decoration-violet-900 decoration-2 hover:underline dark:decoration-violet-300">
//                 iC
//                 <span className=" inline-block h-3 w-3 rounded-full bg-violet-900 dark:bg-violet-500 "></span>
//                 llege
//               </p>
//             </Link>
//           </div>
//         </div>
//         <div className=" scrollWidth w-full">
//           <Outlet />
//         </div>
//       </section>
//     </main>
//   );
// };

// export default RegisterLayout;

//---------------------------------------------------------new code----
import React from "react";
import CircleDesign from "./CircleDesign";
import { FaUniversity } from "react-icons/fa";
import { PiStudentThin, PiUserThin, PiStudent } from "react-icons/pi";
import { NavLink, Link, Outlet, useLocation } from "react-router-dom";

const RegisterLayout = () => {
  const location = useLocation().pathname;

  return (
    // <main
    //   id="register"
    //   className="relative z-0 flex h-screen items-center justify-center bg-gradient-to-b from-slate-400 to-slate-300 py-8 text-gray-900 "
    // >
    //   <CircleDesign />
    //   <section className="my-8 flex h-fit w-fit animate-fadeInFast flex-col justify-start gap-6 rounded-md bg-white p-4 text-gray-900 hover:opacity-100 focus:opacity-100 dark:bg-[#060913] dark:text-gray-50 md:p-8 lg:flex-row xl:w-1/2 ">
    //     <div className="flex flex-col-reverse justify-between lg:flex-col ">
    //       <h1 className="text-4xl font-semibold lg:text-5xl">
    //         {location === "/register/reg_teacher" ? "Teacher" : "Student"}
    //         <br />
    //         Registration
    //       </h1>
    //       <div className="m-2 flex flex-col-reverse gap-4 text-4xl md:text-5xl  lg:flex-col ">
    //         <div className="flex gap-4 ">
    //           <NavLink to={"./reg_teacher"}>
    //             <PiUserThin className="rounded-full border-[1px] border-gray-900 p-[2px] font-light dark:border-gray-300 md:p-2" />
    //           </NavLink>
    //           <NavLink to={"./reg_student"}>
    //             <PiStudentThin className="rounded-full border-[1px] border-gray-900 p-[2px] font-light dark:border-gray-300 md:p-2" />
    //           </NavLink>
    //         </div>
    //         <Link
    //           className="flex items-center font-spectral text-xl font-semibold text-gray-900 dark:text-gray-50"
    //           to="../"
    //         >
    //           <PiStudent />
    //           <p className="decoration-violet-900 decoration-2 hover:underline dark:decoration-violet-300">
    //             iC
    //             <span className=" inline-block h-3 w-3 rounded-full bg-violet-900 dark:bg-violet-500 "></span>
    //             llege
    //           </p>
    //         </Link>
    //       </div>
    //     </div>
    //     <div className=" scrollWidth w-full">
    //       <Outlet />
    //     </div>
    //   </section>
    // </main>
    <main
  id="register"
  className="relative z-0 flex h-screen items-center justify-center bg-gradient-to-b from-gray-200 to-gray-300 py-8 text-gray-700 "
>
  <CircleDesign />
  <section className="my-8 flex h-fit w-fit animate-fadeInFast flex-col justify-start gap-6 rounded-md bg-white p-4 text-gray-700 hover:opacity-100 focus:opacity-100 md:p-8 lg:flex-row xl:w-1/2 ">
    <div className="flex flex-col-reverse justify-between lg:flex-col ">
      <h1 className="text-4xl font-semibold lg:text-5xl">
        {location === "/register/reg_teacher" ? "Teacher" : "Student"}
        <br />
        Registration
      </h1>
      <div className="m-2 flex flex-col-reverse gap-4 text-4xl md:text-5xl  lg:flex-col ">
        <div className="flex gap-4 ">
          <NavLink to={"./reg_teacher"}>
            <PiUserThin className="rounded-full border-[1px] border-gray-700 p-[2px] font-light md:p-2" />
          </NavLink>
          <NavLink to={"./reg_student"}>
            <PiStudentThin className="rounded-full border-[1px] border-gray-700 p-[2px] font-light md:p-2" />
          </NavLink>
        </div>
        <Link
          className="flex items-center font-spectral text-xl font-semibold text-gray-700"
          to="../"
        >
          <PiStudent />
          <p className="decoration-violet-900 decoration-2 hover:underline">
            iC
            <span className=" inline-block h-3 w-3 rounded-full bg-violet-900"></span>
            llege
          </p>
        </Link>
      </div>
    </div>
    <div className="scrollWidth w-full">
      <Outlet />
    </div>
  </section>
</main>

  );
};

export default RegisterLayout;
