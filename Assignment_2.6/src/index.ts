enum greetingTime {
  morning = 'Good Morning',
  afternoon = 'Good Afternoon',
  evening = 'Good Evening'
}

interface Customer {
  loyal: boolean;
  name: string;
  visits: number;
}

const customerGreeting = (time_of_day: greetingTime, customer: Customer): string => {
  const loyal = 'We appreciate you for being a loyal customer!';
  const notLoyal = 'How about we make a deal. If you join our loyalty program today, you can get a free cup of coffee!';
  let greeting = `${time_of_day} ${customer.name}! `
  
  greeting += customer.loyal ? loyal : notLoyal;
 
  return greeting
}



const gabriel: Customer = {
  loyal: true,
  name: 'Gabriel',
  visits: 2
}

console.log(customerGreeting(greetingTime.morning, gabriel));