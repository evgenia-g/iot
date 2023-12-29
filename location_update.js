const fetch = require('node-fetch');

const entityId = 'bus123';
const newLocationValue = '39.55083631960003,21.765653788036932';
const contextBrokerUrl = `http://150.140.186.118:1026/v2/entities/${entityId}/attrs`;

fetch(contextBrokerUrl, {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({
        location: {
            type: 'geo:point',
            value: newLocationValue,
        },
    }),
})
    .then(response => {
        if (response.ok) {
            console.log(`Attributes of entity ${entityId} updated successfully`);
        } else {
            console.error(`Failed to update attributes of entity ${entityId}. Status: ${response.status}`);
        }

        return response.text(); // Log the response body for further analysis
    })
    .then(responseText => console.log('Response Body:', responseText))
    .catch(error => console.error('Error:', error));
