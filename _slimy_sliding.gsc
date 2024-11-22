#using scripts/shared/util_shared;
#using scripts/shared/callbacks_shared;



function autoexec __init__system() {
    system::register( "_slimy_sliding", &__init__, undefined, undefined );
}

function __init__() {
    level.g_slide_allowed = true;
    callback::on_player_spawned( &player_spawn_init );
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

function player_spawn_init() {
    self endon( "death" );

    self thread stop_g_sliding();
    self thread stopSlideBoost();
}

function stop_g_sliding() {
    self endon( "disconnect" );
    self notify( "kill_g_slide_thread_1" );
    self endon( "kill_g_slide_thread_1" );

    while( isAlive( self ) ) {
        wait 0.1;
        if( level.g_slide_allowed )
            continue;

        if( self isSliding() )
            self AllowJump( 0 );
        else
            self AllowJump( 1 );
    }
}

function stopSlideBoost() {
    self endon( "disconnect" );
    self notify( "kill_g_slide_thread_2" );
    self endon( "kill_g_slide_thread_2" );

    while( isAlive( self ) ) {
        self waittill( "slide_end" );

        if( level.g_slide_allowed )
            continue;

        self SetStance( "stand" );
    }
}