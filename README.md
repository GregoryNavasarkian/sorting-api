# Sorting API
 
### Description
API that sorts lists using multiple sorting algorithms and returns a sorted list and time taken to sort as JSON object.

### Usage
-Default PORT set as 3000.
#### Endpoints:
- /bubble -> sort data using bubble sort
- /insertion -> sort data using insertion sort
- /merge -> sort data using merge sort
- /radix -> sort data using radix sort
- /selection -> sort data using selection sort
- /quick -> sort data using quick sort
#### Sending requests (JSON)
To send a request as JSON separate data with commas i.e. {5,4,3,2,1}. No spaces between characters.

#### Receiving requests (JSON)
Returned data sent in the following format:
- Arr in sorted order.
- Time in milliseconds.

`{
	"arr": [
		1,
		2,
		3,
		4,
		5
	],
	"time": "1.5"
}`
