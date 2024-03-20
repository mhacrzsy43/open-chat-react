# Architecture Design

OpenChat is an AI conversation application built on the Next.js framework, aiming to provide an AI productivity platform that enables users to interact with AI through natural language. The following is an overview of the architecture design of OpenChat:

#### TOC

- [Application Architecture Overview](#application-architecture-overview)
- [Frontend Architecture](#frontend-architecture)
- [Edge Runtime API](#edge-runtime-api)
- [Agents Market](#agents-market)
- [Plugin Market](#plugin-market)
- [Security and Performance Optimization](#security-and-performance-optimization)
- [Development and Deployment Process](#development-and-deployment-process)

## Application Architecture Overview

The overall architecture of OpenChat consists of the frontend, EdgeRuntime API, Agents Market, Plugin Market, and independent plugins. These components collaborate to provide a complete AI experience.

## Frontend Architecture

The frontend of OpenChat adopts the Next.js framework, leveraging its powerful server-side rendering (SSR) capability and routing functionality. The frontend utilizes a stack of technologies, including the antd component library, open-ui AIGC component library, zustand state management, swr request library, i18next internationalization library, and more. These technologies collectively support the functionality and features of OpenChat.

The components in the frontend architecture include app, components, config, const, features, helpers, hooks, layout, locales, migrations, prompts, services, store, styles, types, and utils. Each component has specific responsibilities and collaborates with others to achieve different functionalities.

## Edge Runtime API

The Edge Runtime API is one of the core components of OpenChat, responsible for handling the core logic of AI conversations. It provides interaction interfaces with the AI engine, including natural language processing, intent recognition, and response generation. The EdgeRuntime API communicates with the frontend, receiving user input and returning corresponding responses.

## Agents Market

The Agents Market is a crucial part of OpenChat, providing various AI agents for different scenarios to handle specific tasks and domains. The Agents Market also offers functionality for discovering and uploading agents, allowing users to find agents created by others and easily share their own agents in the market.

## Plugin Market

The Plugin Market is another key component of OpenChat, offering various plugins to extend the functionality and features of OpenChat. Plugins can be independent functional modules or integrated with agents from the Agents Market. During conversations, the assistant automatically identifies user input, recognizes suitable plugins, and passes them to the corresponding plugins for processing and returns the results.

## Security and Performance Optimization

OpenChat's security strategy includes authentication and permission management. Users need to authenticate before using OpenChat, and operations are restricted based on the user's permissions.

To optimize performance, OpenChat utilizes Next.js SSR functionality to achieve fast page loading and response times. Additionally, a series of performance optimization measures are implemented, including code splitting, caching, and resource compression.

## Development and Deployment Process

OpenChat's development process includes version control, testing, continuous integration, and continuous deployment. The development team uses version control systems for code management and conducts unit and integration testing to ensure code quality. Continuous integration and deployment processes ensure rapid delivery and deployment of code.

The above is a brief introduction to the architecture design of OpenChat, detailing the responsibilities and collaboration of each component, as well as the impact of design decisions on application functionality and performance.