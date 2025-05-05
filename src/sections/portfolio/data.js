import realEstateDashboardImage from '../../assets/real_estate_dashboard.jpg';
import stockMarketDagImage from '../../assets/stockMarketDAG.png';
import serviceDeskImage from '../../assets/service_desk_dashboard.png';

const data = [
    {
        id: 1,
        category: 'data engineering',
        image: realEstateDashboardImage,
        title: "Real Estate Dashboard",
        desc: "End-to-End Data Engineering project to develop a dashboard which showcases various metrics around the price paid data for various land and property transactions in England and Wales.",
        tools: ['Looker Studio','Google Cloud','SQL', 'Python', 'Airflow', 'dbt', 'Docker', 'Terraform'],
        demo: "https://lookerstudio.google.com/reporting/0cce3cd0-a312-49ee-b4e9-5439192078ec",
        github: "https://github.com/KenImade/real_estate_dashboard"
    },
    {
        id: 2,
        category: 'data engineering',
        image: stockMarketDagImage,
        title: "Stock Price Dashboard",
        desc: "This project implements an Apache Airflow DAG that automates the analysis of stock data. The pipeline is designed to fetch stock prices for a given symbol, process and format the data, and finally load it into a data warehouse for further analysis. It leverages various Airflow operators and integrations including Python tasks, Docker containers, and Slack notifications.",
        tools: ['Airflow','Metabase','PostgreSQL', 'Python', 'Spark', 'Docker', 'Minio'],
        demo: "https://github.com/KenImade/stock_market_pipeline",
        github: "https://github.com/KenImade/stock_market_pipeline"
    },
    {
        id: 3,
        category: 'data analytics',
        image: serviceDeskImage,
        title: "Service Desk Performance Dashboard",
        desc: "I developed a service desk performance dashboard as part of my internship with Techway Placements. It provided insights into the performance of the service desk team in dealing with various tickets being raised by various customers.",
        tools: ['Excel','Looker Studio'],
        demo: "https://lookerstudio.google.com/s/pTsoz1HuqbE",
        github: "https://lookerstudio.google.com/s/pTsoz1HuqbE"
    },
]

export default data;