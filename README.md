# 🍔 Munchie Quick Order
Munchie Quick Order is a modern web application designed to streamline the food ordering process. Built with cutting-edge technologies, it offers a seamless and responsive user experience for both customers and restaurant owners.
## 🚀 Live Demo
Access the live application [here](https://santhureddie.github.io/munchie-quick-order/)
## 🛠️ Technologies Used
- React: Front-end library for building user interfaces.
- TypeScript: Superset of JavaScript that adds static typing.
- Vite: Next-generation frontend tooling for fast development.
- Tailwind CSS: Utility-first CSS framework for rapid UI development.
- shadcn/ui: Component library for building accessible and customizable UI components.
- Supabase: Backend-as-a-Service providing authentication and database services.
## 📁 Project Structure
```
munchie-quick-order/
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── public/                # Static assets
├── src/                   # Source code
├── supabase/              # Supabase configuration and migrations
├── .gitignore             # Git ignore rules
├── README.md              # Project documentation
├── bun.lockb              # Bun package manager lock file
├── components.json        # Component configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # Entry HTML file
├── package-lock.json      # NPM lock file
├── package.json           # Project metadata and dependencies
├── postcss.config.js      # PostCSS configuration
├── tailwind.config.ts     # Tailwind CSS configuration
├── tsconfig.app.json      # TypeScript app configuration
├── tsconfig.json          # Base TypeScript configuration
├── tsconfig.node.json     # TypeScript Node.js configuration
└── vite.config.ts         # Vite configuration
```

## ⚙️ Getting Started
To set up and run the project locally, follow these steps:
### Prerequisites
- Node.js: Ensure you have Node.js installed. You can download it from [here](https://nodejs.org/)
- Bun: This project uses Bun as the package manager. Install it from [here](https://bun.sh/)
### Installation
Clone the repository:
```
git clone https://github.com/santhureddie/munchie-quick-order.git
cd munchie-quick-order
```
Install dependencies:
```
bun install
```
Set up environment variables:
Create a .env file in the root directory and add the necessary environment variables. Refer to the Supabase documentation for required variables.
Start the development server:
```
bun run dev
```
The application will be available at http://localhost:5173/ by default.

## 🧩 Features
- **User Authentication:** Secure login and registration using Supabase.
- **Responsive Design:** Optimized for various devices and screen sizes.
- **Real-time Updates:** Live order tracking and status updates.
- **Admin Dashboard:** Manage menu items, orders, and user accounts.
- **Customizable UI:** Easily modify components using shadcn/ui and Tailwind CSS.

## 📦 Deployment
This portfolio is deployed using GitHub Pages. Deployment is automated via GitHub Actions, and any changes pushed to the main branch are automatically deployed to the live site.

## 📄 License
This project is licensed under the [MIT License](https://opensource.org/licenses/MIT)

## 👨‍💻 Author
 Santhosh Kumar Reddy Jampana
 
 [GitHub Profile](https://github.com/santhureddie)
