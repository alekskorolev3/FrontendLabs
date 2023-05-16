import socket
import time

# Define the TCP socket parameters
TCP_HOST = '127.0.0.1'
TCP_PORT = 8888

# Define the UDP socket parameters
UDP_HOST = '127.0.0.1'
UDP_PORT = 8889

# Create a TCP socket and connect it to the server
tcp_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_sock.connect((TCP_HOST, TCP_PORT))


# Send a message to the server to indicate that the client is ready to start
tcp_sock.send("start".encode())

# Create a UDP socket
udp_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)

# Send a series of messages to the server over UDP with an order-related parameter
for i in range(10):
    msg = f"{i+1}|Message {i+1}"
    udp_sock.sendto(msg.encode(), (UDP_HOST, UDP_PORT))
    print(f"Sent message {i+1}")
    time.sleep(1)

# Send a special command to the server to indicate that the client is done sending messages
udp_sock.sendto("0|quit".encode(), (UDP_HOST, UDP_PORT))
print("Sent quit command")

# Close the sockets
udp_sock.close()
tcp_sock.close()
