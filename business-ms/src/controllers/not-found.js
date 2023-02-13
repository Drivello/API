export default async function notFound () {
    return {
      headers: {
        'Content-Type': 'application/json'
      },
      body: { error: 'Route not found.' },
      statusCode: 404
    }
  }
  