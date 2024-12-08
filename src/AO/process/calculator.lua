local json = require("json")

-- Process B Identifier
PROCESS_B = "VCkO3nt4ceJ54kYKlLSw6nD4Hr2K6PN9LgWBystmpMk"



-- Function to get the current time in milliseconds
function getCurrentTime(msg)
    return msg.Timestamp -- returns time in milliseconds
end



-- Handler for adding two numbers and sending a request to Process B
Handlers.add(
    "add",
    Handlers.utils.hasMatchingTag("Action", "add"),
    function(m)
        -- Extract and validate inputs
        local intA = tonumber(m.Tags.intA)
        local intB = tonumber(m.Tags.intB)

        if not intA or not intB then
            print("Invalid inputs. Both values must be numbers.")
            ao.send({ Target = m.From, Data = "Error: Both values must be numbers." })
            return
        end

        -- Prepare message for Process B
        local request = {
            Action = "calculate",
            intA = intA,
            intB = intB,
            user = m.From, -- Include the original user's address
            timestamp = getCurrentTime(m)
        }
        local requestJson = json.encode(request)

        -- Send to Process B
        ao.send({
            Target = PROCESS_B,
            Data = requestJson,
            Tags = { intA = tostring(intA), intB = tostring(intB), Action = "calculate" }
        })
        print("Request sent to Process B for computation.")
    end
)

