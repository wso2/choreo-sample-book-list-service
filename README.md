# Choreo Sample - Book List Node.js REST API Service

Welcome to the Choreo Book List Node.js service! This application is designed to help you get familiar with the [Choreo](https://console.choreo.dev/) platform and its features.

## Overview
This application is a book list manager service. It allows users to maintain a book list. Users can add, remove, and get books in the book list. This application is built using Node.js and uses node in memory cache to store data. 

## File Overview

The below table gives a brief overview of the important files in the service.

| Filepath               | Description                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| app.mjs                | The Node.js (JavaScript) based service code.                                                                      
| .choreo/endpoints.yaml | Choreo-specific configuration that provides information about how Choreo exposes the service.                                                                |
| openapi.yaml           | OpenAPI contract of the service. This is required to publish our service as a managed API. This openapi.yaml file is referenced by the .choreo/endpoints.yaml. |

## Getting Started

To engage with these examples:

1. **Fork the Repository**: Begin by forking this repository to your GitHub account.
2. Log into [Choreo](https://console.choreo.dev/).
3. Create a project.
4. In newly created project, create a Service component with NodeJs build pack.
5. Test the service. 

Please refer to the Choreo documentation under the [Deploy Your First Service](https://wso2.com/choreo/docs/quick-start-guides/deploy-your-first-service/) section to learn more.

### Use the following configuration when creating this component in Choreo:

- Build Pack: **NodeJS**
- NodeJS Project Directory: `/`
- Language Version: `20.x.x`

## Run Application Locally

Navigate to the Node.js application directory

```bash
cd choreo-sample-book-list-service
```

Run the service

```bash
npm install && node index.mjs
```

## Contribution & Feedback

We greatly value community insights:

- **Contribute**: Got a new example or an enhancement? We'd love to incorporate it.
- **Feedback**: Encounter issues or have suggestions? Please raise them under this repository's [issues section](https://github.com/wso2/choreo-sample-book-list-service/issues).