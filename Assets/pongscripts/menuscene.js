private var ray : Ray;
private var rayCastHit : RaycastHit;
var highscore : TextMesh;

function Awake()
{
	highscore.text = "Your best try: " + PlayerPrefs.GetInt("highscore").ToString();
}
function Update () 
{
	if(Input.GetMouseButton(0))
	{
		ray = Camera.main.ScreenPointToRay (Input.mousePosition);
		if(Physics.Raycast (ray, rayCastHit))
		{
			if(rayCastHit.transform.name == 'playButton')
			{
				Application.LoadLevel("maingame");
			}
		}
	}
}