  function describe_city(city: string, country: string = "Saudi Arabia" ) {
        console.log(`${city} is in ${country}.`);
    }
    
    // Calling the function for three different cities
    describe_city("Karachi", "Pakistan");
    describe_city("MAKKAH"); // Default country
    describe_city("New York", "United States");
    