var maingameScript : maingame;
var sparks : GameObject;
function Awake()
{
	rigidbody.AddForce(5, 5, 0, ForceMode.Impulse);
	InvokeRepeating("IncreaseBallVelocity", 2, 2);
}

function Update()
{
	if(transform.position.y < -4)
	{
		maingameScript.GameOver();
	}
}

function IncreaseBallVelocity()
{
	rigidbody.velocity *= 1.05;
}

function OnCollisionEnter(collision: Collision)
{
	Instantiate(sparks, transform.position, transform.rotation);
}