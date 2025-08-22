#!/usr/bin/env node

const { program } = require("commander");
const createProject = require("../lib/create-project");

program
  .version("1.0.0")
  .description("Create clean project templates with zero boilerplate")
  .argument("<framework>", "Framework to use (react, nextjs)")
  .argument("<project-name>", "Name of the project")
  .action(async (framework, projectName) => {
    await createProject(framework, projectName);
  });

program.parse();
