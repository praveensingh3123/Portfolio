import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.webp'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/Shekel/" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                <a href="https://praveensingh3123.github.io/Shekel/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a> </div>
            </header>
            <div className="body">
              <h3>Shekel: Cash Settlement App</h3>
              <p>Shekel is a financial debt settlement application that simplifies a directed graph of transactions between individuals. Using a shortest path algorithm, the application calculates the net balance for each person by subtracting debts from credits. The person with the minimum net balance (debtor) and the person with the maximum net balance (creditor) are identified. </p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>JavaScript</li> <li>Data Structures</li> </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/InfoNinja-AI-Powered-Assistance" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
                <a href="https://infoninja.streamlit.app/" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" /></a>
              </div>
            </header>
            <div className="body">
              <h3>InfoNinja: AI-Powered Assistance with PDF Insight</h3>
              <p>
                Developed an interactive chatbot application using Streamlit, OpenAI's GPT-3.5-turbo language model, and PyPDF2 for PDF text extraction, enabling users to ask context-based questions on uploaded PDFs and general queries.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Streamlit</li>
                <li>PyPDF2</li>
                <li>LangChain</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " stroke-width="1" stroke-linecap="round" stroke-linejoin="round" ><title>Folder</title><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/TaskMaster" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/praveensingh3123/TaskMaster" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>TaskMaster: A visual work management system</h3>
              <p>Through a highly interactive and intuitive interface, users can create, update, and seamlessly transition tasks between columns, optimizing task prioritization and resource allocation. The app leverages Kotlin’s robust Android development features, ensuring efficient data persistence, real-time updates, and smooth user interactions.</p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Kotlin</li>
                <li>JSON</li>
                <li>XML</li>
                <li>Firebase</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/CryptoScreener" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://cryptoscreener.netlify.app/" target="\_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>CryptoScreener</h3>
              <p>
              CryptoScreener provides real-time data on cryptocurrencies by fetching data from the CoinGecko API. It displays a list of the top 10 cryptocurrencies, including information such as their current price, market cap, trading volume, 24-hour price change, and market cap. Users can search for specific coins using a search bar that filters results dynamically based on the coin's name.
              </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>CSS</li>
                <li>JavaScript</li>
                <li>APIs</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/LoanMonger" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/praveensingh3123/LoanMonger" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>LoanMonger: Loan Risk Analyzer </h3>
              <p>LoanMonger is a full-stack application designed to streamline loan application processing. Applicants can classify their loan applications and assess their probability of loan approval using machine learning models, while managers can utilize batch processing to classify all applications, ranking them by priority. It integrates scikit-learn for predictive analysis, ensuring accurate and efficient loan classification. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Machine Learning</li>
                <li>DJango</li>
                <li>scikit-learn</li>
                <li>Python</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

       <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Code</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/praveensingh3123/SupplyChacha" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
                <a href="https://github.com/praveensingh3123/SupplyChacha" target="_blank" rel="noreferrer">
                  <img src={externalLink} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>SupplyChacha: E-Commerce website </h3>
              <p>This e-commerce platform offers a comprehensive shopping experience with features like a shopping cart, product reviews, search functionality, and a top products carousel. Users can track orders through profiles, while admins manage products, users, and order details. The platform supports PayPal and credit card payments and includes a database seeder for easy deployment. Additionally, admins can mark orders as delivered and handle the checkout process efficiently. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>NodeJS</li>
                <li>ReactJS</li>
                <li>ExpressJS</li>
                <li>MongoDB</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

      

      </div>
    </Container>
  );
}