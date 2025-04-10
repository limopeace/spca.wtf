// Simple health check function to verify Netlify Functions are working
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "SPCA.wtf API is healthy",
      environment: process.env.NODE_ENV || "development",
      timestamp: new Date().toISOString()
    })
  };
}; 