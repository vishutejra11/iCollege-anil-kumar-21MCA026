// import { Link } from "react-router-dom";
// import { GiBookshelf } from "react-icons/gi";
// import { IoCalendarOutline } from "react-icons/io5";
// import { HiOutlineDocumentReport } from "react-icons/hi";
// import { AiOutlineSchedule } from "react-icons/ai";
// import { BiBookAdd } from "react-icons/bi";
// import { RiUserAddLine } from "react-icons/ri";
// import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
// import { useContext, useEffect } from "react";
// import UserContext from "../../Hooks/UserContext";
// import axios from "../../config/api/axios";

// const Dash = () => {
//   const { user, setPaperList } = useContext(UserContext);

//   useEffect(() => {
//     const getPapers = async () => {
//       const url =
//         user.userType === "teacher"
//           ? `paper/teacher/${user._id}`
//           : `paper/student/${user._id}`;

//       const response = await axios.get(url);
//       setPaperList(response.data);
//     };
//     getPapers();
//   }, [setPaperList, user]);

//   return (
//     <main className="self-center">
//       <h2 className="m-6 mx-auto text-center text-6xl font-bold dark:text-slate-400">
//         Dashboard
//       </h2>
//       <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./paper"}
//         >
//           <GiBookshelf className="text-[2.5rem] lg:text-[4rem] " />
//           <div className="font-semibold">
//             Papers
//             <p className="text-sm font-normal lg:text-base ">
//               View Papers and Notes
//             </p>
//           </div>
//         </Link>

//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./attendance"}
//         >
//           <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem] " />
//           <div className="font-semibold">
//             Attendance
//             <p className="text-sm font-normal lg:text-base ">
//               Add or Edit Attendance
//             </p>
//           </div>
//         </Link>

//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./internal"}
//         >
//           <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem] " />
//           <div className="font-semibold">
//             Internal Mark
//             <p className="text-sm font-normal lg:text-base ">
//               View or Edit Internal Marks
//             </p>
//           </div>
//         </Link>
    

//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./time_schedule"}
//         >
//           <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] " />
//           <div className="font-semibold">
//             Time Schedule
//             <p className="text-sm font-normal lg:text-base ">
//               View or Edit Time Schedule
//             </p>
//           </div>
//         </Link>

//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./time_schedule"}
//         >
//           <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem] " />
//           <div className="font-semibold">
//             Time Schedule
//             <p className="text-sm font-normal lg:text-base ">
//               View or Edit Time Schedule
//             </p>
//           </div>
//         </Link>

//         {user.role === "HOD" && (
//           <>
//             <Link
//               className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//               to={"./add_paper"}
//             >
//               <BiBookAdd className="text-[2.5rem] lg:text-[4rem] " />
//               <div className="font-semibold">
//                 Add Paper
//                 <p className="text-sm font-normal lg:text-base ">
//                   Add a New Paper
//                 </p>
//               </div>
//             </Link>

//             <Link
//               className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//               to={"./approve_teacher"}
//             >
//               <RiUserAddLine className="text-[2.5rem] lg:text-[4rem] " />
//               <div className="font-semibold">
//                 Approve Teacher
//                 <p className="text-sm font-normal lg:text-base ">
//                   Approve registered teacher(s)
//                 </p>
//               </div>
//             </Link>
//           </>
//         )}
//         {user.role === "student" && (
//           <Link
//             className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//             to={"./join_paper"}
//           >
//             <PiBooks className="text-[2.5rem] lg:text-[4rem] " />
//             <div className="font-semibold">
//               Manage Paper
//               <p className="text-sm font-normal lg:text-base ">
//                 Join or Leave Paper
//               </p>
//             </div>
//           </Link>
//         )}
//         <Link
//           className="flex gap-2 rounded-lg bg-violet-100 p-6 text-base hover:bg-violet-950 hover:text-slate-100 dark:bg-violet-950/40 lg:text-lg"
//           to={"./profile"}
//         >
//           {user.role === "student" ? (
//             <PiStudent className="text-[2.5rem] lg:text-[4rem] " />
//           ) : (
//             <PiUser className="text-[2.5rem] lg:text-[4rem] " />
//           )}
//           <div className="font-semibold">
//             Profile
//             <p className="text-sm font-normal lg:text-base ">
//               View or Edit Profile
//             </p>
//           </div>
//         </Link>
//       </div>
//     </main>
//   );
// };

// export default Dash;

// ------------------------------------------------------------------------

import { Link } from "react-router-dom";
import { GiBookshelf } from "react-icons/gi";
import { IoCalendarOutline } from "react-icons/io5";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { AiOutlineSchedule } from "react-icons/ai";
import { BiBookAdd } from "react-icons/bi";
import { RiUserAddLine } from "react-icons/ri";
import { PiBooks, PiUser, PiStudent } from "react-icons/pi";
import { useContext, useEffect } from "react";
import UserContext from "../../Hooks/UserContext";
import axios from "../../config/api/axios";
import { SiTask } from "react-icons/si";

// import Nav from "./Nav";
const Dash = () => {
  const { user, setPaperList } = useContext(UserContext);

  useEffect(() => {
    const getPapers = async () => {
      const url =
        user.userType === "teacher"
          ? `paper/teacher/${user._id}`
          : `paper/student/${user._id}`;

      const response = await axios.get(url);
      setPaperList(response.data);
    };
    getPapers();
  }, [setPaperList, user]);

  return (
//     <main className="self-center bg-white bg-gradient-to-b from-gray-200 to-gray-300">
//       <h2 className="m-6 mx-auto text-center text-6xl font-bold dark:text-slate-400">
//         Dashboard
//       </h2>
// <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./paper"}
//   >
//     <GiBookshelf className="text-[2.5rem] lg:text-[4rem]" />
//     <div className="font-semibold">
//       Papers
//       <p className="text-sm font-normal lg:text-base">
//         View Papers and Notes
//       </p>
//     </div>
//   </Link>

//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./attendance"}
//   >
//     <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem]" />
//     <div className="font-semibold">
//       Attendance
//       <p className="text-sm font-normal lg:text-base">
//         Add or Edit Attendance
//       </p>
//     </div>
//   </Link>

//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./internal"}
//   >
//     <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem]" />
//     <div className="font-semibold">
//       Internal Mark
//       <p className="text-sm font-normal lg:text-base">
//         View or Edit Internal Marks
//       </p>
//     </div>
//   </Link>

//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./time_schedule"}
//   >
//     <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem]" />
//     <div className="font-semibold">
//       Time Schedule
//       <p className="text-sm font-normal lg:text-base">
//         View or Edit Time Schedule
//       </p>
//     </div>
//   </Link>

//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./time_schedule"}
//   >
//     <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem]" />
//     <div className="font-semibold">
//       Time Schedule
//       <p className="text-sm font-normal lg:text-base">
//         View or Edit Time Schedule
//       </p>
//     </div>
//   </Link>

//   {user.role === "HOD" && (
//     <>
//       <Link
//         className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//         to={"./add_paper"}
//       >
//         <BiBookAdd className="text-[2.5rem] lg:text-[4rem]" />
//         <div className="font-semibold">
//           Add Paper
//           <p className="text-sm font-normal lg:text-base">
//             Add a New Paper
//           </p>
//         </div>
//       </Link>

//       <Link
//         className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//         to={"./approve_teacher"}
//       >
//         <RiUserAddLine className="text-[2.5rem] lg:text-[4rem]" />
//         <div className="font-semibold">
//           Approve Teacher
//           <p className="text-sm font-normal lg:text-base">
//             Approve registered teacher(s)
//           </p>
//         </div>
//       </Link>
//     </>
//   )}
//   {user.role === "student" && (
//     <Link
//       className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//       to={"./join_paper"}
//     >
//       <PiBooks className="text-[2.5rem] lg:text-[4rem]" />
//       <div className="font-semibold">
//         Manage Paper
//         <p className="text-sm font-normal lg:text-base">
//           Join or Leave Paper
//         </p>
//       </div>
//     </Link>
//   )}
//   <Link
//     className="flex gap-2 rounded-lg bg-gray-800 p-6 text-base text-gray-100 hover:bg-gray-700 hover:text-gray-200 dark:bg-violet-100/40 lg:text-lg"
//     to={"./profile"}
//   >
//     {user.role === "student" ? (
//       <PiStudent className="text-[2.5rem] lg:text-[4rem]" />
//     ) : (
//       <PiUser className="text

// -[2.5rem] lg:text-[4rem]" />
//     )}
//     <div className="font-semibold">
//       Profile
//       <p className="text-sm font-normal lg:text-base">
//         View or Edit Profile
//       </p>
//     </div>
//   </Link>
// </div>
//     </main>
<main className="self-center bg-white bg-gradient-to-b from-gray-200 to-gray-300">
<h2 className="m-6 mx-auto text-center text-6xl font-bold text-gray-100 dark:text-violet-300">
  Dashboard
</h2>

  <div className="grid grid-cols-1 place-content-center gap-3 px-1 py-4 lg:grid-cols-2 lg:gap-4 lg:px-8 xl:grid-cols-3">
    <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./paper"}
    >
      <GiBookshelf className="text-[2.5rem] lg:text-[4rem]" />
      <div className="font-semibold">
        Papers
        <p className="text-sm font-normal lg:text-base">
          View Papers and Notes
        </p>
      </div>
    </Link>

    <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./attendance"}
    >
      <IoCalendarOutline className="text-[2.5rem] lg:text-[4rem]" />
      <div className="font-semibold">
        Attendance
        <p className="text-sm font-normal lg:text-base">
          Add or Edit Attendance
        </p>
      </div>
    </Link>

    <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./internal"}
    >
      <HiOutlineDocumentReport className="text-[2.5rem] lg:text-[4rem]" />
      <div className="font-semibold">
        Internal Mark
        <p className="text-sm font-normal lg:text-base">
          View or Edit Internal Marks
        </p>
      </div>
    </Link>

    <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./time_schedule"}
    >
      <AiOutlineSchedule className="text-[2.5rem] lg:text-[4rem]" />
      <div className="font-semibold">
        Time Schedule
        <p className="text-sm font-normal lg:text-base">
          View or Edit Time Schedule
        </p>
      </div>
    </Link>

    {user.role !== 'student' &&  <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./time_schedule"}
    >
      <SiTask className="text-[2.5rem] lg:text-[4rem]" />
      <div className="font-semibold">
        Assign Task
        <p className="text-sm font-normal lg:text-base">
          View or Edit Time Schedule
        </p>
      </div>
    </Link>}

    {user.role === "HOD" && (
      <>
        <Link
          className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
          to={"./add_paper"}
        >
          <BiBookAdd className="text-[2.5rem] lg:text-[4rem]" />
          <div className="font-semibold">
            Add Paper
            <p className="text-sm font-normal lg:text-base">
              Add a New Paper
            </p>
          </div>
        </Link>

        <Link
          className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
          to={"./approve_teacher"}
        >
          <RiUserAddLine className="text-[2.5rem] lg:text-[4rem]" />
          <div className="font-semibold">
            Approve Teacher
            <p className="text-sm font-normal lg:text-base">
              Approve registered teacher(s)
            </p>
          </div>
        </Link>
      </>
    )}
    {user.role === "student" && (
      <Link
        className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
        to={"./join_paper"}
      >
        <PiBooks className="text-[2.5rem] lg:text-[4rem]" />
        <div className="font-semibold">
          Manage Paper
          <p className="text-sm font-normal lg:text-base">
            Join or Leave Paper
          </p>
        </div>
      </Link>
    )}
    <Link
      className="flex gap-2 rounded-lg bg-gray-300 p-6 text-base text-gray-900 hover:bg-gray-400 hover:text-gray-800 dark:bg-gray-800/40 lg:text-lg"
      to={"./profile"}
    >
      {user.role === "student" ? (
        <PiStudent className="text-[2.5rem] lg:text-[4rem]" />
      ) : (
        <PiUser className="text-[2.5rem] lg:text-[4rem]" />
      )}
      <div className="font-semibold">
        Profile
        <p className="text-sm font-normal lg:text-base">
          View or Edit Profile
        </p>
      </div>
    </Link>
  </div>
</main>

  );
};

export default Dash;

