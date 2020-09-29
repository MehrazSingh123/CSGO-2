function hasCollided(lBullet, lWall)
{
    bulletRightEdge = lBullet.x + lBullet.width;
    wallLeftEdge = lWall.x;
    if (bulletRightEdge >= wallLeftEdge)
    {
        return true;
    }
    return false;
}