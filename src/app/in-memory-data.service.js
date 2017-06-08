"use strict";
var InMemoryDataService = (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: "祖逖" },
            { id: 12, name: "戚继光" },
            { id: 13, name: "郑成功" },
            { id: 14, name: "霍去病" },
            { id: 15, name: "王玄策" },
            { id: 16, name: "班定远" },
            { id: 17, name: "阎应元" },
            { id: 18, name: "岳鹏举" },
            { id: 19, name: "文天祥" },
        ];
        return { heroes: heroes };
    };
    return InMemoryDataService;
}());
exports.InMemoryDataService = InMemoryDataService;
//# sourceMappingURL=in-memory-data.service.js.map