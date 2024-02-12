import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SchoolIcon from "@mui/icons-material/School";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import DomainIcon from "@mui/icons-material/Domain";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SendIcon from "@mui/icons-material/Send";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import AddTaskIcon from "@mui/icons-material/AddTask";
import PasswordIcon from "@mui/icons-material/Password";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import GroupIcon from "@mui/icons-material/Group";

//sidebar
export const menu = {
  supervisor: [
    {
      title: "PRINCIPAL",
      listItems: [
        {
          title: "Page d'accueil",
          url: "/supervisor",
          icon: DashboardIcon,
        },
      ],
    },
    {
      title: "LISTES",
      listItems: [
        {
          title: "Chefs Dpt",
          url: "/supervisor/headOfDeptList",
          icon: AccountBalanceIcon,
        },
        {
          title: "Professeurs-es",
          url: "/supervisor/profList",
          icon: SchoolIcon,
        },
        {
          title: "Étudiants-es",
          url: "/supervisor/studentList",
          icon: PersonOutlineIcon,
        },
        {
          title: "Activation",
          url: "/supervisor/requestList",
          icon: AddTaskIcon,
        },
      ],
    },
    {
      title: "UTILE",
      listItems: [
        {
          title: "Nouvelle filière",
          url: "/",
          icon: DomainIcon,
        },
      ],
    },
    {
      title: "UTILISATEUR",
      listItems: [],
    },
  ],
  student: [
    {
      title: "PRINCIPAL",
      listItems: [
        {
          title: "Page d'accueil",
          url: "/student",
          icon: DashboardIcon,
        },
      ],
    },
    {
      title: "LISTES",
      listItems: [
        {
          title: "PFE's",
          url: "/student/fyps",
          icon: AccountTreeIcon,
        },
      ],
    },
    {
      title: "UTILE",
      listItems: [
        {
          title: "Mon PFE",
          url: "/student",
          icon: SchoolIcon,
        },
        {
          title: "Postulations",
          url: "/student/requestsList",
          icon: SendIcon,
        },
      ],
    },
    {
      title: "UTILISATEUR",
      listItems: [
        {
          title: "Profile",
          url: "/student/profile/:profileId",
          icon: AccountCircleIcon,
        },
        {
          title: "Changer le mdp",
          url: "/student/password",
          icon: PasswordIcon,
        },
      ],
    },
  ],
  professor: [
    {
      title: "PRINCIPAL",
      listItems: [
        {
          title: "Page d'accueil",
          url: "/professor",
          icon: DashboardIcon,
        },
      ],
    },
    {
      title: "LISTES",
      listItems: [
        {
          title: "Mes PFE's",
          url: "/professor/myFyps",
          icon: AccountTreeIcon,
        },
        {
          title: "Demandes",
          url: "/professor/requests",
          icon: FormatListBulletedIcon,
        },
      ],
    },
    {
      title: "UTILE",
      listItems: [
        {
          title: "PFE's et étds-es",
          url: "/professor",
          icon: SchoolIcon,
        },
      ],
    },
    {
      title: "UTILISATEUR",
      listItems: [
        {
          title: "Profile",
          url: "/professor/profile",
          icon: AccountCircleIcon,
        },
        {
          title: "Changer le mdp",
          url: "/professor/password",
          icon: PasswordIcon,
        },
      ],
    },
  ],
  headOfDepartment: [
    {
      title: "PRINCIPAL",
      listItems: [
        {
          title: "Page d'accueil",
          url: "/headOfDepartment",
          icon: DashboardIcon,
        },
      ],
    },
    {
      title: "LISTES",
      listItems: [
        {
          title: "Mes PFE's",
          url: "/headOfDepartment/myFyps",
          icon: AccountTreeIcon,
        },
        {
          title: "Demandes",
          url: "/headOfDepartment/requests",
          icon: FormatListBulletedIcon,
        },
        {
          title: "Professeurs-es",
          url: "/professor/requests",
          icon: GroupIcon,
        },
      ],
    },
    {
      title: "UTILE",
      listItems: [
        {
          title: "PFE's et étds-es",
          url: "/professor",
          icon: SchoolIcon,
        },
      ],
    },
    {
      title: "UTILISATEUR",
      listItems: [
        {
          title: "Profile",
          url: "/professor/profile",
          icon: AccountCircleIcon,
        },
        {
          title: "Changer le mdp",
          url: "/professor/password",
          icon: PasswordIcon,
        },
      ],
    },
  ],
};

//widget
export const widgetsData = {
  headOfDeptSup: {
    title: "Chefs Dpt",
    counter: 19,
    link: "Voir tous les chefs de département",
    icon: (
      <AccountBalanceIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  },
  SupProf: {
    title: "Professeurs-es",
    counter: 235,
    link: "Voir tous les professeurs-es",
    icon: (
      <SchoolIcon
        className="icon"
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)",
        }}
      />
    ),
  },
  SupStudent: {
    title: "Étudiants-es",
    counter: 759,
    link: "Voir tous les étudiants-es",
    icon: (
      <PersonOutlineIcon
        className="icon"
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)",
        }}
      />
    ),
  },
  SupActivation: {
    title: "Demandes d'Activation",
    counter: 72,
    link: "Voir tous les demandes",
    icon: (
      <AddTaskIcon
        className="icon"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}
      />
    ),
  },
  profStudent: {
    title: "Étudiants-es",
    counter: 759,
    link: "Voir tous les étudiants-es",
    icon: (
      <PersonOutlineIcon
        className="icon"
        style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)",
        }}
      />
    ),
  },
  profFyp: {
    title: "Mes PFE's",
    counter: 13,
    link: "Voir tous mes PFE's",
    icon: (
      <WorkOutlineIcon
        className="icon"
        style={{
          color: "crimson",
          backgroundColor: "rgba(255, 0, 0, 0.2)",
        }}
      />
    ),
  },
  profStudentSupervised: {
    title: "Étudiants Supervisés",
    counter: 42,
    link: "Voir tous les étudiants-es supervisés",
    icon: (
      <PersonOutlineIcon
        className="icon"
        style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)",
        }}
      />
    ),
  },
  profAllFyp: {
    title: "PFE's",
    counter: 42,
    link: "Voir tous les pfe's",
    icon: (
      <WorkOutlineIcon
        className="icon"
        style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)",
        }}
      />
    ),
  },
};

//temporary data
export const userRows = [
  {
    id: 1,
    fname: "John",
    lname: "Snow",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "1snow@gmail.com",
    phone: "123-456-7890",
    departmentName: "Computer Science",
    creationDate: "2022-12-01",
  },
  {
    id: 2,
    fname: "Jamie",
    lname: "Lannister",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "2snow@gmail.com",
    phone: "987-654-3210",
    departmentName: "History",
    creationDate: "2023-01-15",
  },
  {
    id: 3,
    fname: "Lannister",
    lname: "SomeOtherName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "3snow@gmail.com",
    phone: "555-123-4567",
    departmentName: "Chemistry",
    creationDate: "2023-02-20",
  },
  {
    id: 4,
    fname: "Stark",
    lname: "AnotherName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    phone: "789-456-1230",
    departmentName: "Physics",
    creationDate: "2023-03-05",
  },
  {
    id: 5,
    fname: "Targaryen",
    lname: "YetAnotherName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    phone: "321-654-0987",
    departmentName: "Mathematics",
    creationDate: "2023-04-10",
  },
  {
    id: 6,
    fname: "Melisandre",
    lname: "NameSix",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    phone: "999-888-7777",
    departmentName: "Biology",
    creationDate: "2023-05-15",
  },
  {
    id: 7,
    fname: "Clifford",
    lname: "SevenName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    phone: "111-222-3333",
    departmentName: "Engineering",
    creationDate: "2023-06-20",
  },
  {
    id: 8,
    fname: "Frances",
    lname: "EightName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    phone: "444-555-6666",
    departmentName: "Geology",
    creationDate: "2023-07-25",
  },
  {
    id: 9,
    fname: "Roxie",
    lname: "NineName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phone: "666-777-8888",
    departmentName: "Psychology",
    creationDate: "2023-08-30",
  },
  {
    id: 10,
    fname: "Roxie",
    lname: "TenName",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    phone: "222-333-4444",
    departmentName: "Sociology",
    creationDate: "2023-09-04",
  },
];

//project requests
export const projectRequestRows = [
  {
    id: 1,
    title: "Développement d'une application web",
    prof: "John Snow",
    email: "1snow@gmail.com",
    postulationDate: "2023-12-10",
    status: "accepté",
  },
  {
    id: 2,
    title: "Analyse des données météorologiques",
    prof: "Jamie Lannister",
    email: "2snow@gmail.com",
    postulationDate: "2023-12-12",
    status: "accepté",
  },
  {
    id: 3,
    title: "Synthèse de nouveaux composés chimiques",
    prof: "Lannister SomeOtherName",
    email: "3snow@gmail.com",
    postulationDate: "2023-12-15",
    status: "rejeté",
  },
  {
    id: 4,
    title: "Étude des propriétés magnétiques",
    prof: "Stark AnotherName",
    email: "4snow@gmail.com",
    postulationDate: "2023-12-18",
    status: "en-cours",
  },
  {
    id: 5,
    title: "Modélisation mathématique avancée",
    prof: "Targaryen YetAnotherName",
    email: "5snow@gmail.com",
    postulationDate: "2023-12-20",
    status: "en-attente",
  },
  {
    id: 6,
    title: "Étude de la biodiversité marine",
    prof: "Melisandre NameSix",
    email: "6snow@gmail.com",
    postulationDate: "2023-12-22",
    status: "en-attente",
  },
  {
    id: 7,
    title: "Conception de structures architecturales innovantes",
    prof: "Clifford SevenName",
    email: "7snow@gmail.com",
    postulationDate: "2023-12-25",
    status: "accepté",
  },
  {
    id: 8,
    title: "Analyse des comportements humains en ligne",
    prof: "Frances EightName",
    email: "8snow@gmail.com",
    postulationDate: "2023-12-28",
    status: "rejeté",
  },
  {
    id: 9,
    title: "Exploration géologique de nouveaux sites",
    prof: "Roxie NineName",
    email: "9snow@gmail.com",
    postulationDate: "2023-12-30",
    status: "rejeté",
  },
  {
    id: 10,
    title: "Impact de la musique sur la psychologie",
    prof: "Roxie TenName",
    email: "10snow@gmail.com",
    postulationDate: "2024-01-02",
    status: "en-attente",
  },
];

export const projectRows = [
  {
    id: 1,
    title: "Développement d'une application web",
    domain: "Informatique",
    prof: "John Snow",
    creationDate: "2023-12-10",
    numberOfStudents: "2",
    availableSlots: "2",
    status: "disponible",
    description:
      "Description of the web application project.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    email: "john.snow@example.com",
    prerequisites: "Basic knowledge of HTML, CSS, and JavaScript.",
  },
  {
    id: 2,
    title: "Analyse des données météorologiques",
    domain: "Sciences de l'Atmosphère",
    prof: "Jamie Lannister",
    creationDate: "2023-12-12",
    numberOfStudents: "1",
    availableSlots: "1",
    status: "pris",
    description: "Description of the meteorological data analysis project.",
    email: "jamie.lannister@example.com",
    prerequisites: "Background in meteorology and data analysis.",
  },
  {
    id: 3,
    title: "Synthèse de nouveaux composés chimiques",
    domain: "Chimie",
    prof: "Lannister SomeOtherName",
    creationDate: "2023-12-15",
    numberOfStudents: "2",
    availableSlots: "0",
    status: "fermé",
    description: "Description of the chemical compound synthesis project.",
    email: "lannister.someothername@example.com",
    prerequisites: "Chemistry background and laboratory experience.",
  },
  {
    id: 4,
    title: "Étude des propriétés magnétiques",
    domain: "Physique",
    prof: "Stark AnotherName",
    creationDate: "2023-12-18",
    numberOfStudents: "3",
    availableSlots: "3",
    status: "fermé",
    description: "Description of the magnetic properties study project.",
    email: "stark.anothername@example.com",
    prerequisites: "Physics background and knowledge of magnetic materials.",
  },
  {
    id: 5,
    title: "Modélisation mathématique avancée",
    domain: "Mathématiques",
    prof: "Targaryen YetAnotherName",
    creationDate: "2023-12-20",
    numberOfStudents: "1",
    availableSlots: "1",
    status: "disponible",
    description: "Description of the advanced mathematical modeling project.",
    email: "targaryen.yetanothername@example.com",
    prerequisites: "Advanced knowledge in mathematics and modeling techniques.",
  },
  {
    id: 6,
    title: "Étude de la biodiversité marine",
    domain: "Biologie Marine",
    prof: "Melisandre NameSix",
    creationDate: "2023-12-22",
    numberOfStudents: "3",
    availableSlots: "3",
    status: "pris",
    description: "Description of the marine biodiversity study project.",
    email: "melisandre.namesix@example.com",
    prerequisites: "Background in marine biology and ecological studies.",
  },
  {
    id: 7,
    title: "Conception de structures architecturales innovantes",
    domain: "Architecture",
    prof: "Clifford SevenName",
    creationDate: "2023-12-25",
    numberOfStudents: "2",
    availableSlots: "2",
    status: "pris",
    description: "Description of the innovative architectural design project.",
    email: "clifford.sevenname@example.com",
    prerequisites: "Architectural design skills and creativity.",
  },
  {
    id: 8,
    title: "Analyse des comportements humains en ligne",
    domain: "Psychologie",
    prof: "Frances EightName",
    creationDate: "2023-12-28",
    numberOfStudents: "3",
    availableSlots: "1",
    status: "fermé",
    description: "Description of the online human behavior analysis project.",
    email: "frances.eightname@example.com",
    prerequisites: "Psychology background and research skills.",
  },
  {
    id: 9,
    title: "Exploration géologique de nouveaux sites",
    domain: "Géologie",
    prof: "Roxie NineName",
    creationDate: "2023-12-30",
    numberOfStudents: "2",
    availableSlots: "0",
    status: "fermé",
    description: "Description of the geological exploration project.",
    email: "roxie.ninename@example.com",
    prerequisites: "Geological knowledge and field exploration experience.",
  },
];
