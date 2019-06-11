//
// app.post('/inject-data', jsonParser, dataInjector);

export default function dataInjector(req, res) {
    //console.debug('dataInjector',req.body);
    const {scenario, data} = req.body;
    scenarios[scenario] = data;
    //console.log('scenarios',scenarios);
    res.send({code: 'Success', when: new Date()})
}

const scenarios = {};

// app.get('/quote', getRequestQuote);

export function getRequestQuote(req, res) {
    // console.log('getRequestQuote',req.headers);
    const auth = req.get('authorization') || 'na';
    console.log('getRequestQuote', auth);

    const data = scenarios[auth];

    if (data) {
        const response = data.requestQuoteResponse;
        if (response) {
            res.status(response.status).send(response.body);
            return;
        }
    }

    res.status(500).send({fail: new Date()});
}

// examples, POST to /inject-data

/*

const test1 = {
    "scenario": "Success-request-quote",
    "data": {
        "requestQuoteResponse": {
            "status": 200,
            "body": {
                "text": "It works",
                "other": 387438
            }
        }
    };

const test2 = {
    "scenario": "Fail-request-quote",
    "data": {
        "requestQuoteResponse": {
            "status": 400,
            "body": {
                "errorCode": "9999",
                "reason": 387438
            }
        }
    };


EXAMPLE (not MRQ)
=================
    Given I am a user who has previously recorded my annual income as "USD 82000"
    When I navigate to the financial details page
    And I retrieve my record, I see the value of "USD 82000"
    And I update my record to have an annual income of "USD 87000"
    Then I retrieve my record, I see the value of "USD 87000"

The /inject-data only happens in the Given
The update record is handled by the mock, it mocks out what the actual service does,
taking annualIncome from the request and updating the mock scenario data

*/
