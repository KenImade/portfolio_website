import { FaBrain } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaCogs, FaCode } from "react-icons/fa";

const data = [
    {
        id: 1,
        icon: <FaBrain />,
        title: 'Machine Learning & AI',
        desc: 'I enjoy working on the technical side of machine learning, from experimenting with models to deploying them in production. \
        I focus on integrating ML into real-world systems where it can automate decisions, streamline processes, and deliver measurable impact.'
    },
    {
        id: 2,
        icon: <FaMagnifyingGlassChart />,
        title: 'Data Analytics',
        desc: 'I use data to tell stories and guide decisions. My work combines statistical analysis, data visualization, and predictive modeling \
        to uncover insights that help teams understand performance, trends, and opportunities.'
    },
    {
        id: 3,
        icon: <FaCogs />,
        title: 'Data Engineering',
        desc: 'I build the systems that make data science possible, scalable data pipelines, automated workflows, and clean, reliable data sources. \
        My goal is to create infrastructure that helps teams move fast and make smart decisions with confidence.'
    },
    {
        id: 4,
        icon: <FaCode />,
        title: 'Backend & Web Development',
        desc: 'I’m building up my backend and full-stack skills, creating APIs and web apps that bring data and functionality to life. \
        I enjoy designing clean, maintainable systems that connect users to powerful data-driven tools.'
    }
]

export default data;