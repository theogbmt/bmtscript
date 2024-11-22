#using scripts/shared/util_shared;
#using scripts/shared/callbacks_shared;

function autoexec __init__system() {
    system::register( "_slimy_sliding", &__init__, undefined, undefined );
}

function __init__() {
    SetDvars();
}

function SetDvars() {
    SetDvar( "slide_forceBaseSlide", 0 );
    SetDvar( "slide_maxTime", 100 );
    SetDvar( "jump_slowdownEnable", 1 );
    SetDvar( "sprint_allowReload", 0 );
    SetDvar( "sprint_allowRestore", 0 );
    setDvar( "sprint_allowRechamber", 0 );
    SetDvar( "player_sprintUnlimited", 0 );
    SetDvar( "player_sprintSpeedScale", 0.9 );
}