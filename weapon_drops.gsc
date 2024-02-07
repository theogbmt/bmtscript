/////////////////////////////////////////////////////////////////////
//                          WEAPON DROPS                           //
/////////////////////////////////////////////////////////////////////

array::thread_all( level.chests, &weaponDrops );

function weaponDrops()
{
	for( ;; )
	{
		self waittill( "trigger", player );

		if( self._box_open )
		{
			self.zbarrier util::waittill_any( "randomization_done", "box_hacked_respin" );
		}

		while( !IS_TRUE( self.closed_by_emp ) )
		{
			self waittill( "trigger", pussygrabber );

			struct = spawnStruct();

			struct.weapon = player GetCurrentWeapon();
			struct.stock = player GetWeaponAmmoStock( struct.weapon );
			struct.clip = player GetWeaponAmmoClip( struct.weapon );
			struct.w_list_size = player GetWeaponsListPrimaries().size;

			WAIT_SERVER_FRAME;
			pussygrabber notify( "box_taken" );

			if( isDefined( struct.weapon ) && !IS_EQUAL( pussygrabber, level ) && IS_TRUE( self.box_respun ) )
				player = pussygrabber;
			if( IS_EQUAL( pussygrabber, player ) )
			{
				if( !zm_equipment::is_equipment( self.zbarrier.weapon ) )
				player weapon_drops( struct.weapon, struct.clip, struct.stock, struct.w_list_size );
					break;
			}
		}
	}
}


function weapon_drops( weapon, stockAmmo, clipAmmo, w_a_size )
{
    if( self HasPerk( "specialty_additionalprimaryweapon" ) &&  w_a_size <= 2 )
    {
        return;
    }
    else if( !IS_EQUAL( w_a_size, 1 ) )
    {
        c_weapname = weapon.name;
        c_weap = weapon;

        w_drop = zm_utility::spawn_weapon_model( GetWeapon( c_weapname ), undefined, self.origin, self.angles );

        w_drop.clipammo = stockAmmo;
	    w_drop.stockammo = clipAmmo;

        w_drop thread weapon_drop( c_weapname, c_weap, self );
    }
}

function second_weapon_drops()
{
	w_a_size = self GetWeaponsListPrimaries().size;

	if( self HasPerk( "specialty_additionalprimaryweapon" ) && w_a_size <= 2 )
		return;
	else if( w_a_size != 1 )
	{
		c_weapname = self GetCurrentWeapon().name;
		c_weap = self GetCurrentWeapon();

		w_drop = zm_utility::spawn_weapon_model( GetWeapon( c_weapname ), undefined, self.origin, self.angles );

		w_drop.clipammo = self GetWeaponAmmoClip( self GetCurrentWeapon() );
		w_drop.stockammo = self GetWeaponAmmoStock( self GetCurrentWeapon() );

		w_drop thread weapon_drop( c_weapname, c_weap, self );
	}
}

#define WEAPON_THUNDERGUN "Thundergun"
#define ZOMBIE_THUNDERGUN_UPGRADED "Thunderslapper"
#define POWER_MIN 15
#define POWER_MAX 20

function weapon_drop( c_weapname, c_weap, player )
{
    self endon( "special_timed_out_end_on" );
    self thread pickup_timeout();
    
    const n_ground_offset = 25;
    const distance_infront = 30;

    // Forward
    start = player.origin;
    forward_dir = AnglesToForward( player.angles );
    end = start + (forward_dir * distance_infront);
    trace = BulletTrace(start, end, false, undefined);
    final_pos = trace["position"];

    floor_position = util::ground_position(final_pos, 500, n_ground_offset);

    self zm_utility::fake_physicslaunch(final_pos, RandomFloatRange( POWER_MIN, POWER_MAX ) );

    self SetPlayerCollision( 0 );

	self clientfield::set( "modelEnableKeylineBMT", 1 );
        
    self.origin = self.origin + ( 0, 0, 15 );
    self.angles = ( 0, 0, 0 );
    self thread rotateAndBobItem();

    special_check = GetWeapon( c_weapname ).displayname;  
    str_hint = "Press ^3[{+activate}]^7 to pick up ^2" + special_check;
    self.small_trig = spawnTrig( self.origin, 20, 30, str_hint, 1, 1 );

    self.small_trig waittill( "trigger", player );

    self.small_trig delete();

    clipammo = self.clipammo;
    stockammo = self.stockammo;
    
    self notify( "timed_out_pickup" );

    self clientfield::set( "modelEnableKeylineBMT", 0 );

    player second_weapon_drops();
    player zm_weapons::weapon_give( GetWeapon( c_weapname ), 0, 0, 1 );
    player SetWeaponAmmoStock( GetWeapon( c_weapname ), stockammo );
    player SetWeaponAmmoClip( GetWeapon( c_weapname ), clipammo );

    stockammo = undefined;
    clipammo = undefined;

    self notify( "pickup_timeout" );
    WAIT_SERVER_FRAME;
    self Delete();
}
