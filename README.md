<div>
    <h1>Accumula E-Commerce Shipping Challenge</h1>
    <h2>How to start application</h2>
    <ul>
        <li>
        First, clone this repository to your local machine. Make sure you are cloning from the main branch. 
        </li>
        <li>
        Next, open the repository on your local machine in a code editor of your choice. 
        </li>
        <li>
        Navigate to the root directory of the cloned repo and execute the following command to install all dependencies: 
        <pre>npm install</pre>
        </li>
        <li>
        Next, you'll want to create a file titled <b>.env</b> to hold the MongoDB URI. (IMPORTANT: Make sure this is in the root directory of your cloned repo!) Name your key <b>MONGO_DB_URI</b> and set its value as the database URI link (provided ahead of time).
        </li>
        <li>
        Next, run the following command to spin up application (this program runs on localhost:3000 and localhost:8080 so ensure that no other programs are running on these ports!)
        <pre>npm run dev</pre>
        </li>
    </ul>
<br>
    <h2>Troubleshooting</h2>
    <p>If product details are not loading on the page, ensure that the database URI is accurate and is in string format without any trailing semicolons after the URI in the .env file. Also be aware that the .env file must be in the root directory in order to ensure proper functionality. If this does not resolve issues, refresh or restart the application by killing both localhost:3000 and localhost:8080 and running 
    <pre>npm run dev</pre>
    </p>
</div>
