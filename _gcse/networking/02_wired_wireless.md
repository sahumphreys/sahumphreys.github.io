---
title: Wired and Wireless Networks
page: 3
categories: [Networking]
---

{: .callout.objectives}
>- Compare technology for implementing wired and wireless networks
>- Disadvantages and advantages of wired networking
>- Disadvantages and advantages of wireless networking
>- Cables used for wired networking including copper and fibre
>- Bluetooth

For homes and small businesses there is the choice between connecting to the local network using cables, or via radio waves wirelessly.  It was not so long ago that the only option was to use cable but that situation is rapidly changing and, certainly domestically, wireless is becoming more prevalent. Both technologies have their advantages and disadvantages and here the two are compared.

## Wired LAN
 
The wired LAN uses physical cables to connect devices within a network.  The predominant cable type today is Ethernet cable, typically having four pairs of twisted copper wires enclosed in a plastic sheath, known as a twisted-pair cable. The twisting of the pairs helps reduce electromagnetic interference.  The cable may be **unshielded** or **shielded**.  The shielded cable has additional protection against interference. 

The ends of Ethernet cables have connectors called RJ45 connectors, which resemble larger versions of telephone line connectors (RJ11). These connectors have eight pins that correspond to the eight wires inside the cable.

![Ethernet Cable](/assets/img/ethernet.jpg)

Ethernet cables come in different categories such as Cat5, Cat6, Cat7, and Cat8. Each category has specific specifications for data transfer speed, bandwidth, and potential interference reduction. For instance, Cat6 cables generally support higher data transfer rates compared to Cat5 cables.

Connecting devices using Ethernet cable is well established and very reliable, unless the cable itself develops a fault.  However, you do need a lot of cable as each device needs to be connected, usually via a central hub or switch.  It can be time-consuming, and costly to run cables through walls.

On average, a wired connection will be more reliable tha a wireless connection and offer higher bandwidth for devices on the network - it's faster with Cat6a cable delivering 10 Gbps throughput - though Wireless is improving all the time.

### Ethernet

Ethernet is a widely used for connecting computers and other devices in a local area network (LAN). It is a family of networking technologies and standards defined by the IEEE (Institute of Electrical and Electronics Engineers). Ethernet uses a protocol that controls how data packets are placed on the network and how they are retrieved.

The most common form of Ethernet is wired Ethernet, which involves the use of physical cables to connect devices. These cables typically use twisted pair wires and connectors, and the most common type of wired Ethernet is known as "10/100/1000BASE-T," referring to the maximum data transfer rate in megabits per second (Mbps) supported by the network.

Ethernet operates using a protocol called **Carrier Sense Multiple Access with Collision Detection** (CSMA/CD). In simpler terms, devices on an Ethernet network listen to the network to determine if it is clear before transmitting data. If multiple devices attempt to transmit data simultaneously, a collision may occur, and the devices involved use a process to resolve and retransmit the data.

Ethernet systems split teh data being transmitted into **frames**, similar to the packets transmitted on the Internet.  each data frame will contain the source and destination MAC addresses and other data to assist with error checking.  If an error arises a frame will be resent.

![Ethernet frame](/assets/img/ethernet-frame.png)

## Wireless LAN

A wireless network uses radio waves to transmit data between devices, intended to replace wired connections.  WiFi is a type of wireless networking that uses radio frequencies to send and receive data. WiFi allows users to connect to the Internet at high speeds without the necessity of cables. WiFi stands for “wireless fidelity” and is a phrase that is often used to refer to wireless networking technologies. A wireless router is used to connect to the internet. When you connect to Wi-Fi, you’re connecting to a wireless router that connects your Wi-Fi-enabled devices to the Internet.

Wireless can be used for a PAN using Bluetooth that communicates across short distances, usually no more than a few metres typically connecting desktops, laptops, smartphones, speakers etc..  Bluetooth was intended for portable devices and their applications.

Wifi and Bluetooth are complementary, Wifi requires an access point which has responsibility for routing all traffic while Bluetooth connects two devices together with minimal configuration.

To use a wireless network we need:

- **Wireless Access Points (WAPs):** A wireless transmitter that receives data from the network converting this data into radio waves which are then transmitted.  Devices on the network will then receive this signal via their Wireless Interface. Data is converted into radio frequency signals through a process called **modulation**. Modulation adjusts the properties of the radio waves to represent the digital information being transmitted.  A domestic router will also be functioning as a WAP.
- **Wireless Network Interface Cards (NICs):** These are components in devices (such as laptops, smartphones, or tablets) that enable them to communicate with the network.

Wireless communication occurs within specific frequency bands allocated for this purpose. Wi-Fi commonly operates in the 2.4 GHz and 5 GHz bands. The choice of frequency can affect the data transfer speed and the ability to penetrate obstacles such as walls in a building Within the frequency bands will be several channels and devices communicate over these channels to avoid interference with other nearby wireless networks.

How the communication is carried out is also governed by protocols such as the IEEE 802.11 family.  There have been several iterations of this standard and is being updated regularly.  The latest (2024) being 802.11be.

Encryption and security protocols (e.g., WPA2, WPA3) are used to secure wireless transmissions. This helps prevent unauthorized access and protects the data being transmitted.

## Hybrid Networks

Most LANS today will incorporate both wired and wireless.  Where devices are rarely moved around, such as desktops, these will usually (and preferably) be wired while laptops and smartphones will use the wireless network.

## Comparing Wired and Wireless Networks

|                  | Wired                                                                                                                                      | Wireless                                                                                      |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Speed            | Faster than wireless as less interference                                                                                                  | Slower than wired, susceptible to interference                                                |
| Cost             | Can be expensive as additional equipment is needed depending on local demands including switches, server cabinets, trunking for cables etc | Relatively cheap but multiple WAPs may be needed depending on building size and configuration |
| Security         | More secure than wireless as cables are harder to tamper with                                                                              | Less secure as packets can be intercepted wirelessly                                          |
| Range            | Copper cables can transmit data for up to 100m, fibre optic in excess of 100km                                                             | Limited range                                                                                 |
| Mobility         | Limited as devices are fixed to the cable connection point                                                                                 | High mobility                                                                                 |
| Reliability      | High availability                                                                                                                          | Lower than wired                                                                              |
| Maintenance      | High cost to maintain (depending on size of LAN)                                                                                           | Low cost                                                                                      |
| Equipment needed | Adding in Router(s), Switch(es), Hub(s)                                                                                                    | Wireless Access Point, Wireless router                                                        |

## Questions

1. Compare and contrast the technologies used for implementing wired and wireless networks.
   
2. Explain the advantages and disadvantages of wired networking. Provide specific examples of scenarios where wired networking might be preferred.

3. Discuss the advantages and disadvantages of wireless networking. Include considerations for security and interference in your response.

4. Describe the construction of Ethernet cables, including the number of pairs of twisted copper wires and the purpose of twisting them.

5. What are the differences between unshielded and shielded Ethernet cables, and in what situations might a shielded cable be preferred?

6. Explain the role of RJ45 connectors in Ethernet cables. How many pins do these connectors have, and what is their significance?

7. Outline the categories of Ethernet cables (Cat5, Cat6, Cat7, Cat8) and briefly explain how they differ in terms of data transfer speed and potential interference reduction.

8. Define Ethernet and its role in connecting devices within a local area network (LAN). Mention the protocol used by Ethernet and its implications for data transmission.

9. Describe the process of wireless data transmission, including the role of Wireless Access Points (WAPs) and Wireless Network Interface Cards (NICs).

10. Explain the differences between Wi-Fi and Bluetooth in terms of their intended uses, range, and configurations. How are they complementary in a wireless network setup?
