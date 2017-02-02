/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('director');
 * mod.thing == 'a thing'; // true
 */

module.exports = {};
module.exports.memory = Memory.director

module.exports.setupTimer = 0
module.exports.setup = function () {
    if (this.setupTimer < 10) {
        this.setupTimer++
        return
    }
    if (Memory.director       == undefined) Memory.director       = {}
    if (Memory.director.rooms == undefined) Memory.director.rooms = {}
    for (let roomName in Game.rooms) {
        if (Memory.director.rooms[roomName] == undefined) Memory.director.rooms[roomName] = {}

        let gRoom = Game.rooms[roomName]
        let room = Memory.director.rooms[roomName]

        if (room.hasBeenScouted == undefined) room.hasBeenScouted = false
        if (room.scout == undefined) room.scout = -1
        if (room.poi == undefined) room.poi = {}
        if (room.nearestSpawner == undefined) room.nearestSpawner = { id: -1, dist: 0 }
    }
}