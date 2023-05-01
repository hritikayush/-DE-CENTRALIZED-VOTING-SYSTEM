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
    Team [] public teams;
    address public manager;
    //mapping(address => bool) public reg_voter;          
    uint256 registerdvoters_count;
    string event_name;
    string event_desc;
    mapping(address => bool) people_who_voted;
    //bool votes_going_on = true;
    //mapping(address => bool) public totalVoters;
    bool going_on = true;
    uint256 team_counts;

    function EventVoting(address creator, string name, string description) public{
        manager = creator;
        event_name = name;
        event_desc = description;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }


    function addTeam(string name, string description) public restricted{
        team_counts ++;
        Team memory newTeam = Team({
            name : name,
            description : description,
            id : team_counts,
            votesCount : 0
        });
        teams.push(newTeam);
    }

    function vote_here(uint index) public{
        Team storage team = teams[index];
        require(going_on);
        require(!team.voters[msg.sender]);
        require(!people_who_voted[msg.sender]);
        //require(reg_voter[msg.sender]);   

        team.voters[msg.sender] = true;
        team.votesCount++;
        people_who_voted[msg.sender] = true;
        registerdvoters_count++;
    }

    function close_voting() public restricted{
        require(msg.sender == manager);
        require(going_on);
        going_on = false;
    }
    
    function getSummary() public view returns(string memory, 
        string memory, uint256, uint256, address) {
        return (
            event_name,
            event_desc,
            teams.length,
            registerdvoters_count,
            manager
        );
    }
    function getTeamsCount() public view returns(uint256){
        return teams.length;
    }
    
    function show_winner() public view returns (string name) {
        string memory winner = "";
        uint256 max_votes = 0;
        for(uint256 i=0;i<teams.length();i++)
        {
            if(max_votes < teams[i].votesCount)
            {
                max_votes = teams[i].votesCount;
                winner = teams[i].name;
            }
        }
        return winner;
}
}