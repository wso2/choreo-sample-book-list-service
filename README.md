# Choreo Sample - Book List Node.js REST API Service

## Repository File Structure

The below table gives a brief overview of the important files in the service.

| Filepath               | Description                                                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| app.mjs                | The Node.js (JavaScript) based service code.                                                                                                                  |
| Dockerfile             | Choreo uses this Dockerfile to build the container image of the application.                                                                                  |
| .choreo/endpoints.yaml | Choreo-specific configuration that provides information about how Choreo exposes the service.                                                                |
| openapi.yaml           | OpenAPI contract of the service. This is required to publish our service as a managed API. This openapi.yaml file is referenced by the .choreo/endpoints.yaml. |

## Deploy Application

Please refer to the Choreo documentation under the [Develop a REST API](https://wso2.com/choreo/docs/develop-components/develop-services/develop-a-rest-api/#step-1-create-a-service-component-from-a-dockerfile) section to learn how to deploy the application.

### Use the following configuration when creating this component in Choreo:

- Build Pack: **Dockerfile**
- Dockerfile Path: `Dockerfile`
- Docker Context Path: Keep this field empty

## Execute the Sample Locally

Navigate to the Node.js application directory

```bash
cd choreo-sample-book-list-service
```

Run the service

```bash
npm install && node index.mjs
```
