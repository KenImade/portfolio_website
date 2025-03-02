import { FaBrain } from "react-icons/fa";
import { FaMagnifyingGlassChart } from "react-icons/fa6";
import { FaCogs } from "react-icons/fa";
import { LuCodeXml } from "react-icons/lu";

const data = [
    {
        id: 1,
        icon: <FaBrain />,
        title: 'Machine Learning and AI',
        desc: 'From regression models to deep learning, I work with cutting-edge machine learning algorithms to solve real-world problems.\
         Whether predicting customer behavior or automating processes, my ML models aim to add tangible value.'
    },
    {
        id: 2,
        icon: <FaMagnifyingGlassChart />,
        title: 'Data Analytics',
        desc: 'I apply advanced analytical techniques to extract valuable insights from complex data sets, helping businesses optimize operations,\
         forecast trends, and make data-driven decisions. My approach combines statistical analysis, data visualization, and predictive modeling\
          to uncover the stories behind the numbers.'
    },
    {
        id: 3,
        icon: <FaCogs />,
        title: 'Data Engineering',
        desc: 'Building robust data pipelines and scalable architectures is key to efficient data management.\
         I specialize in designing, developing, and maintaining systems that ensure data is collected, processed,\
          and delivered seamlessly, enabling teams to work with reliable, clean data.'
    },
    {
        id: 4,
        icon: <LuCodeXml />,
        title: 'Web Development',
        desc: 'Building robust data pipelines and scalable architectures is key to efficient data management.\
         I specialize in designing, developing, and maintaining systems that ensure data is collected, processed,\
          and delivered seamlessly, enabling teams to work with reliable, clean data.'
    },
]

export default data;