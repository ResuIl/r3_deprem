RegisterCommand('restartServer', function(source,args)
    if source == 0 then
        local counter = 0
        print("Server restarting...")
        if args[1] ~= nil then
            counter = tonumber(args[1])
        end
        if 9 < counter then
            for i = counter , 9, -1 do 
                Wait(1000)
                print("Server will restart in "..i.." sec")
            end
        end
        TriggerClientEvent("depremm", -1)
        Wait(11000)
        for _, playerId in ipairs(GetPlayers()) do
            DropPlayer(playerId, "Server Restarted! Join Again.")
        end
        os.execute("start D:\\FakeServer\\resources\\r3_deprem\\test.bat")
        os.exit()
    end
end)