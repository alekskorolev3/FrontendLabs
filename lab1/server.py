import socket

# Define the TCP socket parameters
TCP_HOST = '127.0.0.1'
TCP_PORT = 8888

# Define the UDP socket parameters
UDP_HOST = '127.0.0.1'
UDP_PORT = 8889

# Create a TCP socket and bind it to the given host and port
tcp_sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
tcp_sock.bind((TCP_HOST, TCP_PORT))
tcp_sock.listen(1)

# Wait for a client to connect via TCP
print("Waiting for a client to connect via TCP...")
tcp_conn, tcp_addr = tcp_sock.accept()
print(f"Connected to client via TCP at {tcp_addr}")

# Create a UDP socket and bind it to the given host and port
udp_sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
udp_sock.bind((UDP_HOST, UDP_PORT))

# Keep track of the order of the messages received
msg_order = 0

while True:
    # Wait for incoming messages
    data, addr = udp_sock.recvfrom(1024)

    # Decode the incoming message
    message = data.decode()

    # Split the message into the order-related parameter and the message text
    msg_order_received, msg_text = message.split("|")

    # Check if the message is a special command to disconnect
    if msg_text == "quit":
        break

    # Check if the received message is in order
    if int(msg_order_received) == msg_order + 1:
        msg_order += 1
        print(f"Received message {msg_order}: {msg_text}")
    else:
        print(f"Out of order message received: {msg_text}")
        continue

    # Send a response message back to the sender
    response = f"Received message {msg_order}"
    udp_sock.sendto(response.encode(), addr)

# Close the sockets
udp_sock.close()
tcp_conn.close()
