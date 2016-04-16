# Aethernet Service Registry

The Aethernet Service Registry is responsible for maintaining a list of active services installed and running on the platform.

When a service starts and initializes itself, it registers with the service registry and the two modules (service / service registry) negotiate a service "location".  
The service registry is the only service that is statically configured.  Clients connect to the service registry in order to determine where the other services it requires are located.
