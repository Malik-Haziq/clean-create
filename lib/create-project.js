import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import inquirer from "inquirer";
import fs from "fs-extra";
import path from "path";
import chalk from "chalk";
import ora from "ora";
import { execSync } from "child_process";

const SUPPORTED_FRAMEWORKS = ["react", "nextjs"];

async function createProject(framework, projectName) {
  // Validate framework
  if (!SUPPORTED_FRAMEWORKS.includes(framework)) {
    console.log(chalk.red(`❌ Framework "${framework}" is not supported.`));
    console.log(
      chalk.yellow("Supported frameworks:"),
      SUPPORTED_FRAMEWORKS.join(", ")
    );
    process.exit(1);
  }

  // Validate project name
  if (!projectName) {
    console.log(chalk.red("❌ Please provide a project name"));
    process.exit(1);
  }

  // Check if directory already exists
  const projectPath = path.join(process.cwd(), projectName);
  if (fs.existsSync(projectPath)) {
    console.log(chalk.red(`❌ Directory "${projectName}" already exists`));
    process.exit(1);
  }

  // Ask user preferences
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "language",
      message: "Choose language:",
      choices: ["TypeScript", "JavaScript"],
      default: "TypeScript",
    },
    {
      type: "list",
      name: "styling",
      message: "Choose styling:",
      choices: ["Tailwind CSS", "Plain CSS"],
      default: "Tailwind CSS",
    },
  ]);

  // Create project
  await generateProject(framework, projectName, answers);
}

async function generateProject(framework, projectName, choices) {
  const spinner = ora("Creating project...").start();

  try {
    const lang = choices.language === "TypeScript" ? "ts" : "js";
    const style = choices.styling === "Tailwind CSS" ? "tailwind" : "css";
    const templateName = `${lang}-${style}`;

    const templatePath = path.join(
      __dirname,
      "../templates",
      framework,
      templateName
    );
    const projectPath = path.join(process.cwd(), projectName);

    // Copy template
    await fs.copy(templatePath, projectPath);

    // Update package.json with project name
    const packageJsonPath = path.join(projectPath, "package.json");
    const packageJson = await fs.readJson(packageJsonPath);
    packageJson.name = projectName;
    await fs.writeJson(packageJsonPath, packageJson, { spaces: 2 });

    // Update title based on framework
    if (framework === "react") {
      // React projects have index.html
      const indexHtmlPath = path.join(projectPath, "index.html");
      if (fs.existsSync(indexHtmlPath)) {
        let indexHtml = await fs.readFile(indexHtmlPath, "utf8");
        indexHtml = indexHtml.replace(
          "<title>My App</title>",
          `<title>${projectName}</title>`
        );
        await fs.writeFile(indexHtmlPath, indexHtml);
      }
    } else if (framework === "nextjs") {
      // Next.js projects have app/layout.tsx or app/layout.js
      const layoutExtension = lang === "ts" ? "tsx" : "js";
      const layoutPath = path.join(
        projectPath,
        `app/layout.${layoutExtension}`
      );

      if (fs.existsSync(layoutPath)) {
        let layoutContent = await fs.readFile(layoutPath, "utf8");
        layoutContent = layoutContent.replace(
          "title: 'My App'",
          `title: '${projectName}'`
        );
        await fs.writeFile(layoutPath, layoutContent);
      }
    }

    spinner.text = "Installing dependencies...";

    // Install dependencies
    execSync("npm install", {
      cwd: projectPath,
      stdio: "inherit",
    });

    spinner.succeed(chalk.green("✅ Project created successfully!"));

    console.log(chalk.cyan("\n🎉 Your project is ready!"));
    console.log(chalk.white(`📁 cd ${projectName}`));
    console.log(chalk.white("🚀 npm run dev"));
  } catch (error) {
    spinner.fail(chalk.red("❌ Failed to create project"));
    console.error(error);
    process.exit(1);
  }
}

export default createProject;
