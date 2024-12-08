local json = require("json")


-- Table to store transactions
transactions = transactions or {}

-- Function to add two integers
function add(intA, intB)
    return intA + intB
end


function tableToJson(tbl)
    local result = {}
    for key, value in pairs(tbl) do
        local valueType = type(value)
        if valueType == "table" then
            value = tableToJson(value)
            table.insert(result, string.format('"%s":%s', key, value))
        elseif valueType == "string" then
            table.insert(result, string.format('"%s":"%s"', key, value))
        elseif valueType == "number" then
            table.insert(result, string.format('"%s":%d', key, value))
        elseif valueType == "function" then
            table.insert(result, string.format('"%s":"%s"', key, tostring(value)))
        end
    end

    local json = "{" .. table.concat(result, ",") .. "}"
    return json
end


Handlers.add(
    "calculate",
    Handlers.utils.hasMatchingTag("Action", "calculate"),
    function(m)
        -- Decode the request data
        local requestData = json.decode(m.Data)
        local intA = tonumber(requestData.intA)
        local intB = tonumber(requestData.intB)
        local user = requestData.user
        local timestamp = requestData.timestamp

        -- Validate inputs
        if not intA or not intB or not user then
            print("Error: Invalid data received.")
            return
        end

        -- Perform computation
        local result = add(intA, intB)

        -- Prepare response
        local transaction = {
            Action = "result",
            intA = intA,
            intB = intB,
            result = result,
            user = user, -- Pass it back to Process A
            timestamp = timestamp
        }

          table.insert(transactions, transaction)
        print("Transaction saved succesfully.")
    end
)


-- Handler to view all transactions
Handlers.add(
    "view_transactions",
    Handlers.utils.hasMatchingTag("Action", "view_transactions"),
    function(m)
        local user = m.From
        local user_transactions = {}
        
        -- Filter transactions for the specific user
        for _, transaction in ipairs(transactions) do
            -- Skip nil transactions
            if transaction ~= nil and transaction.user == user then
                table.insert(user_transactions, transaction)
            end
        end
        -- Send the filtered transactions back to the user
        ao.send({ Target = user, Data = tableToJson(user_transactions) })
    end
)
