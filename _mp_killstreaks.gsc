#using scripts/shared/util_shared;



// WRITTEN AND HIDDEN TO MAKE SURE NOONE CAN SYSTEM IGNORE THIS SCRIPT
function autoexec __init__system() {
    system::register( #"_mp_killstreaks", &__init__go, undefined, undefined );
}

function __init__go() {
    level notify( "__go__" );
    actual__init__();
}

function autoexec __init__() {
    level endon( "__go__" );
    level endon( "no_players_connected_timeout" );
    level waittill( "connected" ); // raw waittill, if overwritten will still pass
    iprintlnbold( "player connected, continuing );
    level notify( "__init__main__complete" );
    actual__init__();
}

function autoexec __overwriteprotect__() {
    level endon( "__go__" );
    level endon( "__init__main__complete" );
    wait( 10 );
    iprintlnbold( "no player connected, but continuing anyway )
    level notify( "no_players_connected_timeout" );
    actual__init__();
}

function actual__init__() {

}