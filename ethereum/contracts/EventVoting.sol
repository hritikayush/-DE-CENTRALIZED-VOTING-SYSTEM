pragma solidity ^0.4.17;

contract EventFactory{
    address[] public deployedEvents;

    function createEvent(string name, string desc) public{
        address newEvent = new EventVoting(msg.sender, name, desc);
        deployedEvents.push(newEvent);
    }

    function getDeployedEvents() public view returns (address[])
    {
        return deployedEvents;
    }
}

contract EventVoting{
    struct Team {
        string name;
        string description;
        uint256 id;
        mapping(address => bool) voters;
        uint256 votesCount;
    }
    Team[] public teams;
    address public manager;
    uint256 registeredVotersCount;
    string event_name;
    string event_desc;
    mapping(address => bool) peopleWhoVoted;
    bool goingOn = true;
    uint256 teamCounts;

    function EventVoting(address creator, string name, string description) public{
        manager = creator;
        event_name = name;
        event_desc = description;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function addTeam(string name, string description) public{
        teamCounts ++;
        Team memory newTeam = Team({
            name : name,
            description : description,
            id : teamCounts,
            votesCount : 0
        });
        teams.push(newTeam);
    }

    function voteHere(uint index) public{
        require(goingOn);
        require(!peopleWhoVoted[msg.sender]);
        Team storage team = teams[index];
        require(!team.voters[msg.sender]);

        team.voters[msg.sender] = true;
        team.votesCount++;
        peopleWhoVoted[msg.sender] = true;
        registeredVotersCount++;
    }

    function closeVoting() public restricted{
        require(goingOn);
        goingOn = false;
    }
    
    function getSummary() public view returns(string memory, 
        string memory, uint256, uint256, address) {
        return (
            event_name,
            event_desc,
            teams.length,
            registeredVotersCount,
            manager
        );
    }
    
    function getTeamsCount() public view returns(uint256){
        return teams.length;
    }
    
    function showWinner() public view returns (string memory) {
        require(goingOn==false);
        string memory winner = "No one is the winner.";
        uint256 maxVotes = 0;
        for(uint256 i=0; i<teams.length; i++)
        {
            if(maxVotes < teams[i].votesCount)
            {
                maxVotes = teams[i].votesCount;
                winner = teams[i].name;
            }
        }
        return winner;
    }
}
