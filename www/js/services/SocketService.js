(function(){

	angular.module('starter')
	.service('SocketService', ['socketFactory', SocketService]);

	function SocketService(socketFactory){
		return{
			connet_to_socket : function(SERVER_IP) {
				SERVER_IP = 'http://'+SERVER_IP+':3000'
				console.log(SERVER_IP);
				return  socketFactory({ioSocket: io.connect(SERVER_IP)})
			}
			// set_ip : function(ip) {
			// 	SERVER_IP = 'http://'+ip+':3000';
			// 	console.log(SERVER_IP);
			// 	return SERVER_IP;
			// }
		};
	}
})();