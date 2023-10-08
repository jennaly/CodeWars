// given an array of jobs - each job is an object
// each jobs takes 1 full day to complete
// deadline given as the number of days left to complete the job

// given an array of jobs, each job is an object with a deadline and payment property
// return the maximum profit/payment in a 7 day period
function optimalFreelancing(jobs) {
    // Write your code here.
  
    const WEEK_LENGTH = 7;
    let profit = 0;
  
    jobs.sort((a,b) => b.payment - a.payment);
    const timeline = new Array(WEEK_LENGTH).fill(false);
  
    for (const job of jobs) {
      let maxTime = Math.min(job.deadline, WEEK_LENGTH);
      for (let time = maxTime - 1; time >= 0; time-- ) {
        if (timeline[time] === false) {
          timeline[time] = true;
          profit += job.payment;
          break;
        }
      }
    }
    
    return profit;
  }
  
  // prioritize the highest paying jobs first
  // place the highest paying jobs as late as they can be on the 7 day timeline
  
  // initialize a variable for the profit
  // sort the array of jobs by their profit, from greatest to least
  // iterate through job objects
  // for each job, determine the latest day that it can be done in, is either the due date or the last day of the timeline
  // iterate through the days of the deadline backwards
  // at each index, check if that day on the timeline is available (check if the timeline array is false at a certain index)
  // if it is, then change that day to true
  // increment the profit by the job's payment
  
  // return the profit at the end
  
  // time complexity:
  // sorting algo: O(n log n)
  // iterate through jobs array: O(n)
  // at each job, iterate through timeline array: O(7) 
  // => O(nlogn)
  // space complexity:
  // array with size of 7 => O(7) => O(1); doesn't scale with size of input
  