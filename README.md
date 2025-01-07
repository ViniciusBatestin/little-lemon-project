# Development of the Little Lemon Web App

#### Hi everyone! 👋
This repository contains my submission for a Full-Stack design project focused on creating a seamless Table Reservation Feature for a fictional restaurant called Little Lemon. This project was developed as part of the **Meta Professional Certificate Capstone**.

![Little Lemon](https://github.com/ViniciusBatestin/little-lemon-project/blob/main/src/images/Screenshot%202025-01-07%20at%2014.33.28.png)

#### 🧩 The Problem

The Little Lemon restaurant was facing a significant challenge: **the absence of a web presence**. The restaurant lacked an online platform that allowed customers to make reservations.

#### 🎯 The Goal

The objective of this project was straightforward: **design and implement an online table reservation system** from scratch for the Little Lemon restaurant. The focus was on creating a website where customers could easily reserve tables online, improving the user experience and streamlining restaurant operations.

Specific goals for the project included:

1. **Designing and building a user-friendly website**: The website should be intuitive, easy to navigate, and optimized for both desktop and mobile users.

2. **Implementing a seamless online reservation system**: Allow customers to select the date, time, and number of people for their reservation. This system should display available times and let users confirm their bookings.

3. **Providing a responsive and aesthetically consistent design**: The website should look visually appealing and work efficiently across various devices and screen sizes.

#### 🛠️ Approach

To achieve the goal of building a website from scratch, I followed a structured development process, using **React.js** for the frontend and focusing on user-centered design principles. The development process followed these stages:

1. **Empathize**: Understand the users' needs for a simple, efficient, and intuitive online reservation experience.
2. **Define**: Identify the problem: the lack of an online reservation system.
3. **Ideate**: Brainstorm features and a design that would meet the goal.
4. **Prototype**: Develop a working prototype of the online reservation system.
5. **Test**: Gather feedback to refine the system and improve the overall user experience.

![Booking Form](https://github.com/ViniciusBatestin/little-lemon-project/blob/main/src/images/Screenshot%202025-01-07%20at%2014.34.28.png)

![Booking Confirmed](https://github.com/ViniciusBatestin/little-lemon-project/blob/main/src/images/Screenshot%202025-01-07%20at%2014.34.39.png)


### Project Building: Steps in Development
1. **Create React App**

   The first step was to create the React app using the command `npm init create-react-app my-app`. After generating the app, I cleaned up the default template by removing unnecessary elements like `logo.svg` and the pre-existing code in `App.js`. This gave me a blank canvas to start building the website from scratch.

2. **Create Repository on GitHub**

   I created a GitHub repository to store the code and maintain version control. This allowed me to track changes throughout development and collaborate efficiently if needed.

3. **UX Design Process**

   The UX process started with defining the main goal of the website: creating an intuitive and easy-to-use online reservation system. The UX process involved:

   - **Empathizing with users**: I considered the behaviors of potential customers who would visit the website and their frustrations with other restaurant booking systems. Understanding their needs allowed me to tailor the app to solve these issues.

   - **Defining the problem**: The lack of an online reservation system was identified as the core problem, so my primary focus was on creating an efficient booking experience.

   - **Ideating solutions**: I brainstormed ideas to simplify the booking process, such as a clean interface where users could easily select their reservation details (e.g., date, time, and number of people) and check availability.

   - **Prototyping**: I created wireframes and mockups to visualize the website layout and user flow, focusing on the reservation system.

   - **Testing**: I conducted usability testing with simple prototypes to gather feedback and refine the design.

4. **UI Design Process**

   With the goal of creating a user-friendly experience, I focused on several core UI principles:

   - **Visual Consistency**: Ensured that fonts, colors, and button styles were consistent across the entire website.
   - **Functional Consistency**: The design of the interactive elements (such as buttons and forms) adhered to intuitive standards, allowing users to quickly understand how to interact with the system.
   - **User-Expectation Consistency**: The design met common expectations for online booking systems, such as a calendar-style interface and a simple form to enter reservation details.

5. **Wireframing and Layout**

   I started the wireframing process by defining the core sections of the website, specifically the homepage and the reservation page. The layout was kept simple to ensure that users could navigate without confusion:

   - A **Navbar** with clear links to the homepage and reservation page.
   - A **Hero Section** that provides an overview of the restaurant and invites users to make reservations.
   - A **Reservation Form** where users can select their reservation details, such as date, time, and the number of people.

   The wireframe used a 12-column grid for consistency and flexibility, ensuring that the app would be responsive and adapt well to different screen sizes.

6. **Designing Components**

   Once the wireframe was established, I designed the core components of the app, such as:

   - **Reservation Form**: An easy-to-use form where users could select a date, time, and party size.
   - **Confirmation Button**: A clear, actionable button to confirm the reservation.

   I designed these components with consistency in mind, ensuring that each element adhered to the overall design aesthetic.

7. **HTML Structure and React Components**

   The next step was setting up the HTML structure of the website. I used semantic HTML to ensure accessibility and good SEO practices. The structure included key elements like the header, navigation, main content, and footer. Each section was broken down into React components to allow for a modular, maintainable design.

8. **Meta Tags for SEO**

   I included essential meta tags to optimize the website for search engines. These tags provided rich link previews and helped search engines properly index the website.

9. **CSS Layout**

   The layout was implemented using **CSS Grid** for the core structure of the site and **Flexbox** for elements such as the navbar and footer. This allowed for a responsive design that looked good on both desktop and mobile devices.

10. **React Components and Logic**

    I added React logic to handle the **reservation system**. The logic included:

    - A calendar-style interface that allowed users to select a reservation date.
    - Dynamic display of available reservation times based on the selected date.
    - A form where users could enter their details (name, party size, and special requests).

    For example, the form logic used React's `useState` to manage form input values:

    ```javascript
    const [selectedDate, setSelectedDate] = useState("");
    const [partySize, setPartySize] = useState(2);
    ```

11. **Connecting Routes**

    Using **React Router**, I connected different routes to ensure smooth navigation between the homepage and the reservation page. This allowed users to easily navigate the app and access the reservation system without reloading the page.

12. **Forms Implementation**

    I implemented the table reservation form as a controlled component in React. The form allowed users to select the date and time for their reservation, enter their contact information, and confirm the booking.

13. **API Integration**

    To enhance functionality, I integrated a backend API to handle reservation data. The API would manage the availability of tables, ensuring that users could only book available time slots.

14. **Testing**

    Finally, I conducted testing to ensure that the system worked as intended. This included checking that the form submitted correctly, the reservation system displayed available times accurately, and the overall layout was responsive across devices.

### The key features of the project included:

- A **seamless reservation system** that lets customers select dates, times, and party sizes.
- A **responsive, user-friendly design** that adapts to different devices.
- A **simple and intuitive user interface** with clear navigation.

The successful implementation of the online reservation system met the core goal of the project and enabled the Little Lemon restaurant to offer a modern, digital service that enhances customer experience and streamlines restaurant operations.
