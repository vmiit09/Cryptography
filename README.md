# Projects
RC4 Algorithm

The program on RC4 Secure based unicast protocol has been developed in Web platform using HTML and JavaScript. In the program the user has been asked to enter the key and the input message to cipher. The program has 2 interfaces RC4 Sender for sender to transmit the message using a secret key and RC4 receiver to receive message in original form.

 SOFTWARE REQUIREMENTS:
Platform	Web

Programming Language	HTML, JavaScript, CSS

Key	ABCDEF0123456789ABC2018200384138

Browsers	Google Chrome, Internet Explorer

	RC4  SENDER:
•	Sender is responsible for providing encryption and sending facility.
•	The user is asked to enter  a key and a message to send to receiver.
•	Sender divides the input plain text into 252-bytes data segments in sender.html. 
•	The sender also calculates the 128 bit hash value (MD5.js MD5 Hash function from Github) for the data packet.
•	The encrypted data packet is produced by encrypting plaint text and hash value.(using PRGA – prga.js)
•	The sequence counter is initialized with 0 and increment which is also appended to the encrypted text and hash value in sender.html file.
•	The packets are sent to receiver in send.html.

  
	RC4 RECIEVER:
•	Receiver is responsible for providing decrypting facility. The function “receivers” is called to decrypt the data in receiver.js where the decryption is performed.
•	By applying definite rounds of PRGA and IPRGA to compute the correct RC4 state from the current data packet. (receivers.js)
•	Once the text is decrypted by RC4 we obtain the Hash value for the current data packet, and then set SC value for receiver.  (receivers.js)
•	The receiver also calculates the hash value of message and compares it with the received hash value.
•	At the end it prints both the hash values, and the decrypted data in form of packets.


INSTRUCTIONS FOR USING THE SOFTWARE

Transmitting Step:

1.	Step 1- Enter the secure key i.e. ABCDEF0123456789ABC2018200384138 in RC4 sender section.

2.	Step 2 - Enter the below message or any of your 100 byte message in RC4 sender section.
“But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure? On the other hand, we denounce”

3.	Step 3 – Click on Submit button in RC4 Sender section.. 

Output:
1.	The cipher text can be seen below the submit button in form of packets.
2.	A statement saying a message has been sent to receiver and the interface is ready to receive the message.


Receiving Step:

1.	Step 1- Enter the secure key i.e. ABCDEF0123456789ABC2018200384138 in RC4 receiver section. Make sure you enter the correct key, else the output will not be decrypted.




2.	Step 2: Choose the  sequence options for below cases:

Case 1: the sequence of the packets received is 0, 1, 2 and 3
Case 2: the sequence of the packet received is 1, 0, 3 and 2
Case 3: the sequence of the packet received is 3, 2, 1 and 0

3.	Step 3: Click on submit button in RC4 receiver section

Output:
1.	It prints the decrypted hash value and message from sender
2.	It prints the hash value by sender as well as it prints the hash value of the message calculated by receiver.
3.	At the end it prints the original message sent by user.
