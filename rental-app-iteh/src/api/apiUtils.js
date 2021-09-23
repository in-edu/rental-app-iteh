export async function handleResponse(response) {

    if (response.status === 200) return await response;
    if (response.status === 400) {
      const error = response.text();
      throw new Error(error);
    }
    throw new Error("Network response was not ok");
  
  }
  
  export function handleError(error) {
    console.error("API call failed. " + error);
    throw error;
  }
  