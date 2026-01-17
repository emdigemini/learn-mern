// HTTPS, DNS, IPs and Netwoks
// CRUD - Created Read Updated Deleted


/**HTTP Methods (key actions)
 * GET - Retrieve resource/data from the server
 * POST - Create a new resource like placing new order or writing a new data
 * PUT/PATCH - Update an existing resource/data (modify data)
 * DELETE - Deletes a resource/data
 */


/**HTTP Status Codes
 * 100 - Informational
 * 200 - OK => The request was successful
 * 201 Created => A new resource was created
 * 300 - Redirection the thing you are looking for is somewhere else
 * 301 - Moved Permanently - Example: Your sites changes from http://example1.com to http://example2.com
 * 400 Bad Request => The request was invalid
 * 401 Unauthorized - You must log in first (missing or invalid credentials)
 * 403 Forbidden - You're not allowed to access this
 * 404 Not Found => The resource doesn't exist
 * 429 Too Many Requests
 * 500 Internal Server Error => Something went wrong
 * 503 Service Unavailable - Server is temporarily overloaded or down.
 */


/** RESTful APIs
 * REST API - REpresentational State Transfer API
 */
// ORM - Object Relational Mappers

/**2 Main Types of Database
 * 
 * 1. RDBMS - Relational Database
 *    - Stores data in tables (rows and columns)
 *    - Uses SQL for queries
 *    - Examples: MySQL, PostgreSQL, Oracle, SQL Server
 * 
 * 2. NoSQL - Non-Relational Database
 *    - Stores data in flexible formats (documents, key-value, graph, column)
 *    - Schema-less
 *    - Examples: MongoDB, Redis, Cassandra, Neo4j
 */


/**Backend Architectures
 * 
 * 1. Monolithic Architecture
 *    - Definition: The entire backend is built as a single, unified application.
 *    - Pros:
 *        • Simple to develop and deploy
 *        • Easier to test as a single unit
 *        • Less complex infrastructure
 *    - Cons:
 *        • Hard to scale specific parts; must scale whole app
 *        • Large codebase can become messy over time
 *        • Updates/deployments affect entire system
 * 
 * 2. Microservice Architecture
 *    - Definition: Backend is split into smaller, independent services that communicate via APIs.
 *    - Pros:
 *        • Each service can scale independently
 *        • Easier to maintain and update specific services
 *        • Enables use of different technologies per service
 *    - Cons:
 *        • More complex infrastructure and deployment
 *        • Requires careful handling of inter-service communication
 *        • Harder to test end-to-end
 * 
 * 3. Serverless Architecture
 *    - Definition: Backend logic runs in **cloud-managed functions** that are triggered by events; no server management required.
 *    - Pros:
 *        • No need to manage servers or infrastructure
 *        • Scales automatically with demand
 *        • Pay only for actual usage (cost-efficient)
 *    - Cons:
 *        • Cold-start latency can affect performance
 *        • Limited control over execution environment
 *        • Debugging and monitoring can be harder
 */