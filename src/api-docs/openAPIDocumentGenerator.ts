import swaggerJsdoc from 'swagger-jsdoc';
import path from "path";
export function generateOpenAPIDocument() {
  const options = {
    definition: {
      openapi: '3.1.0',
      info: {
        title: "Savingsites's API documentation",
        version: '1.0.0',
        description: 'API documentation for the savingsites project',
      },
    },
    apis: ["src/api/**/*.ts", "src/api/schemas/*.yaml"]
  };
  return swaggerJsdoc(options);
}
