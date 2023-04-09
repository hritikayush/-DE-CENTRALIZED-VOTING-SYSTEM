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
    
    /*function show_winner() public view returns (string name) {
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
        return winner;*/
}




/*
contract EventVoting {
    
    struct Event {
        uint event_id;
        string event_name;
        uint voteCount;
    }

    address public manager;
    bool going_on = true;
    mapping(address => bool) public voters;
    mapping(uint => Event) public events;
    uint public events_count;
    
    event votedEvent (
        uint indexed _eventID
    );

    function EventVoting() public {
        addEvent("Event 1 : | Robot Fighting Competition |");
        addEvent("Event 2 : | Code Fest |");
        addEvent("Event 3 : | Rode Runner Competition |");
        addEvent("Event 4 : | LAN Gaming Competition |");
        addEvent("Event 5 : | Fashion Competition |");
        manager = msg.sender;
    }

    modifier restricted() {
        require(msg.sender == manager);
        _;
    }

    function addEvent(string name) public restricted { // only for manager
        events_count++;
        events[events_count] = Event(events_count, name, 0);
    }

    function end_voting() public restricted {
        going_on = false;
    }

    function to_vote_here(uint _eventID) public payable{
        require(!voters[msg.sender]);
        require(_eventID > 0 && _eventID <= events_count);
        require(going_on);

        voters[msg.sender] = true;
        events[_eventID].voteCount++;
        votedEvent(_eventID);
    }
    
    function finalize_event() public view restricted returns (string) {
        uint max_vote = 0;
        string memory final_event = "";
        for (uint i = 0; i < events_count; i++) {
            if (events[i].voteCount > max_vote) {
                max_vote = events[i].voteCount;
                final_event = events[i].event_name;
            }
        }
        return final_event;
    }
}
*/